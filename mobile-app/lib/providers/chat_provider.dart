// ignore_for_file: prefer_const_constructors, avoid_print

import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../services/chat_service.dart';

// Message Model
class Message {
  final String id;
  final String content;
  final bool isUser;
  final DateTime timestamp;

  Message({
    required this.id,
    required this.content,
    required this.isUser,
    required this.timestamp,
  });

  Message copyWith({String? content}) {
    return Message(
      id: id,
      content: content ?? this.content,
      isUser: isUser,
      timestamp: timestamp,
    );
  }
}

// Chat Notifier
class ChatNotifier extends StateNotifier<List<Message>> {
  final ChatService _chatService;

  ChatNotifier(this._chatService) : super([]);

  Future<void> sendMessage(String text) async {
    final userMsgId = DateTime.now().millisecondsSinceEpoch.toString();
    final userMsg = Message(
      id: userMsgId,
      content: text,
      isUser: true,
      timestamp: DateTime.now(),
    );

    // Optimistic Update
    state = [...state, userMsg];

    // Placeholder Bot Message
    final botMsgId = '${userMsgId}_bot';
    var botMsg = Message(
      id: botMsgId,
      content: '', 
      isUser: false, 
      timestamp: DateTime.now()
    );
    state = [...state, botMsg];

    try {
      final messages = state
          .where((m) => m.id != botMsgId)
          .map((m) => {'role': m.isUser ? 'user' : 'assistant', 'content': m.content})
          .toList();

      final stream = _chatService.sendMessageStream(messages);

      await for (final chunk in stream) {
        // Handle Vercel SDK chunk format here if needed
        // Assuming raw text stream for simplicity
        
        botMsg = botMsg.copyWith(content: botMsg.content + chunk);
        
        // Efficient state update (replace last item)
        state = [
          ...state.sublist(0, state.length - 1),
          botMsg,
        ];
      }
    } catch (e) {
      botMsg = botMsg.copyWith(content: "Error: $e");
      state = [
        ...state.sublist(0, state.length - 1),
        botMsg,
      ];
    }
  }
}

// Providers
final chatServiceProvider = Provider((ref) => ChatService());

final chatProvider = StateNotifierProvider<ChatNotifier, List<Message>>((ref) {
  final service = ref.watch(chatServiceProvider);
  return ChatNotifier(service);
});

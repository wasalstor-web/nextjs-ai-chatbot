// ignore_for_file: avoid_print

import 'dart:convert';
import 'package:http/http.dart' as http;

class ChatService {
  // Use 10.0.2.2 for Android Emulator, localhost for iOS simulator
  // Use your computer's IP for physical Android device
  final String _baseUrl = 'http://10.0.2.2:3000/api/chat';

  Stream<String> sendMessageStream(List<Map<String, String>> messages) async* {
    final client = http.Client();
    final request = http.Request('POST', Uri.parse(_baseUrl));
    request.headers['Content-Type'] = 'application/json';
    request.body = jsonEncode({'messages': messages});

    try {
      final response = await client.send(request);

      if (response.statusCode == 200) {
        await for (var chunk in response.stream.transform(utf8.decoder)) {
          // Vercel AI SDK streaming format handling (simplified)
          // Ideally, parse the specific protocol (0: "text", etc.)
          // Here we assume raw text stream
          yield chunk;
        }
      } else {
        yield "Error: ${response.statusCode}";
      }
    } catch (e) {
      yield "Exception: $e";
    } finally {
      client.close();
    }
  }
}

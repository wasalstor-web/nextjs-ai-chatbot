import 'dart:convert';
import 'package:http/http.dart' as http;

class ChatApi {
  // Use 10.0.2.2 for Android Emulator to access localhost
  // Use your machine's IP for physical devices (e.g., 192.168.1.5)
  // Use localhost for iOS Simulator
  static const String baseUrl = 'http://10.0.2.2:3000/api/chat';

  Future<Stream<String>> sendMessage(List<Map<String, dynamic>> messages) async {
    final client = http.Client();
    final request = http.Request('POST', Uri.parse(baseUrl));
    request.headers['Content-Type'] = 'application/json';
    request.body = jsonEncode({'messages': messages});

    try {
      final response = await client.send(request);
      
      if (response.statusCode == 200) {
        return response.stream.transform(utf8.decoder);
      } else {
        throw Exception('Failed to send message: ${response.statusCode}');
      }
    } catch (e) {
      throw Exception('Network error: $e');
    }
  }
}

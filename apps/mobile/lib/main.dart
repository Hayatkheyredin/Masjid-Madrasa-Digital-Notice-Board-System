import 'package:flutter/material.dart';
// Use the package prefix
import 'package:mobile/features/auth/presentation/pages/splash_screen.dart'; 

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    // Removed 'const' from MaterialApp because if SplashScreen 
    // is being modified, it might prevent a constant build.
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: const SplashScreen(), 
    );
  }
}
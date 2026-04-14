import 'package:flutter/material.dart';
import 'onboarding_screen.dart';
import '../../../../app/app_theme.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {

  @override
  void initState() {
    super.initState();

    Future.delayed(const Duration(seconds: 3), () {
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(
          builder: (context) => const OnboardingScreen(),
        ),
      );
    });
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final isDark = theme.brightness == Brightness.dark;
    
    return Scaffold(
      backgroundColor: theme.scaffoldBackgroundColor,
      body: Stack(
        children: [

          /// 🔹 BACKGROUND GRADIENT
          Positioned.fill(
            child: Container(
              decoration: BoxDecoration(
                gradient: RadialGradient(
                  colors: isDark 
                      ? [
                          AppTheme.primaryGreen.withValues(alpha: 0.1),
                          theme.scaffoldBackgroundColor,
                        ]
                      : [
                          AppTheme.primaryGreen.withValues(alpha: 0.05),
                          theme.scaffoldBackgroundColor,
                        ],
                  radius: 1.5,
                ),
              ),
            ),
          ),

          /// 🔹 DECORATIVE ELEMENTS
          Positioned(
            top: 80,
            right: 40,
            child: Icon(
              Icons.local_florist,
              size: 60,
              color: AppTheme.primaryGreen.withValues(alpha: 0.2),
            ),
          ),

          Positioned(
            bottom: 120,
            left: 30,
            child: Icon(
              Icons.local_florist,
              size: 60,
              color: AppTheme.primaryGreen.withValues(alpha: 0.2),
            ),
          ),

          /// 🔹 MAIN CONTENT
          Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [

                /// LOGO CONTAINER
                Container(
                  width: 120,
                  height: 120,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    color: theme.cardColor,
                    border: isDark 
                        ? Border.all(color: AppTheme.primaryGreen.withValues(alpha: 0.3), width: 2)
                        : null,
                    boxShadow: isDark ? null : [
                      BoxShadow(
                        color: AppTheme.primaryGreen.withValues(alpha: 0.2),
                        blurRadius: 30,
                        offset: const Offset(0, 15),
                      ),
                    ],
                  ),
                  child: const Icon(
                    Icons.mosque,
                    size: 60,
                    color: AppTheme.primaryGreen,
                  ),
                ),

                const SizedBox(height: 32),

                /// TITLE
                Text(
                  "Noor Masjid",
                  style: theme.textTheme.headlineSmall?.copyWith(
                    fontSize: 32,
                    fontWeight: FontWeight.w700,
                    color: theme.colorScheme.onSurface,
                  ),
                ),

                const SizedBox(height: 8),

                /// SUBTITLE
                Text(
                  "EDUCATION & COMMUNITY",
                  style: theme.textTheme.labelMedium?.copyWith(
                    letterSpacing: 1.5,
                    color: AppTheme.primaryGreen,
                    fontWeight: FontWeight.w600,
                  ),
                ),

                const SizedBox(height: 40),

                /// LOADING DOTS
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    _buildDot(true, theme),
                    _buildDot(false, theme),
                    _buildDot(false, theme),
                  ],
                ),
              ],
            ),
          ),

          /// 🔹 BOTTOM TEXT
          Positioned(
            bottom: 40,
            left: 0,
            right: 0,
            child: Center(
              child: Text(
                '"Inspired by Faith, Driven by Community"',
                style: theme.textTheme.bodyMedium?.copyWith(
                  fontStyle: FontStyle.italic,
                  color: theme.colorScheme.onSurface.withValues(alpha: 0.7),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  /// DOT INDICATOR
  Widget _buildDot(bool active, ThemeData theme) {
    return Container(
      margin: const EdgeInsets.symmetric(horizontal: 4),
      width: active ? 12 : 8,
      height: active ? 12 : 8,
      decoration: BoxDecoration(
        color: active 
            ? AppTheme.primaryGreen 
            : AppTheme.primaryGreen.withValues(alpha: 0.3),
        shape: BoxShape.circle,
      ),
    );
  }
}
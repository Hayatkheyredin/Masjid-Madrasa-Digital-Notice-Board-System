import 'package:flutter/material.dart';
import 'login_screen.dart';
import '../../../../app/app_theme.dart';

class ResetSuccessScreen extends StatelessWidget {
  const ResetSuccessScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final isDark = theme.brightness == Brightness.dark;
    
    return Scaffold(
      backgroundColor: theme.scaffoldBackgroundColor,
      body: SafeArea(
        child: Center(
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 25),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [

                /// ✅ SUCCESS ICON
                Stack(
                  alignment: Alignment.center,
                  children: [

                    Container(
                      width: 120,
                      height: 120,
                      decoration: BoxDecoration(
                        color: AppTheme.primaryGreen.withValues(alpha: 0.15),
                        shape: BoxShape.circle,
                        border: isDark 
                            ? Border.all(color: AppTheme.primaryGreen.withValues(alpha: 0.3))
                            : null,
                      ),
                    ),

                    Container(
                      width: 80,
                      height: 80,
                      decoration: BoxDecoration(
                        color: AppTheme.primaryGreen,
                        shape: BoxShape.circle,
                        boxShadow: isDark ? null : [
                          BoxShadow(
                            color: AppTheme.primaryGreen.withValues(alpha: 0.3),
                            blurRadius: 15,
                            offset: const Offset(0, 5),
                          ),
                        ],
                      ),
                      child: const Icon(
                        Icons.check,
                        color: Colors.white,
                        size: 40,
                      ),
                    ),

                    /// ✨ decorative stars
                    Positioned(
                      top: 10,
                      right: 5,
                      child: Icon(
                        Icons.star,
                        color: AppTheme.accentGold,
                        size: 18,
                      ),
                    ),
                    Positioned(
                      bottom: 15,
                      left: 5,
                      child: Icon(
                        Icons.star,
                        color: AppTheme.accentGold.withValues(alpha: 0.7),
                        size: 14,
                      ),
                    ),
                  ],
                ),

                const SizedBox(height: 30),

                /// TITLE
                Text(
                  "Password Reset\nSuccessfully",
                  textAlign: TextAlign.center,
                  style: theme.textTheme.headlineSmall?.copyWith(
                    color: theme.colorScheme.onSurface,
                    fontWeight: FontWeight.w700,
                  ),
                ),

                const SizedBox(height: 15),

                /// DESCRIPTION
                Text(
                  "Your password has been reset successfully. You can now log in with your new password.",
                  textAlign: TextAlign.center,
                  style: theme.textTheme.bodyMedium?.copyWith(
                    color: theme.colorScheme.onSurface.withValues(alpha: 0.7),
                    height: 1.5,
                  ),
                ),

                const SizedBox(height: 40),

                /// ✅ BUTTON
                SizedBox(
                  width: double.infinity,
                  height: 52,
                  child: FilledButton(
                    style: FilledButton.styleFrom(
                      backgroundColor: AppTheme.primaryGreen,
                      foregroundColor: Colors.white,
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(12),
                      ),
                      textStyle: theme.textTheme.labelLarge,
                    ),
                    onPressed: () {
                      Navigator.pushAndRemoveUntil(
                        context,
                        MaterialPageRoute(
                          builder: (_) => const LoginScreen(),
                        ),
                        (route) => false,
                      );
                    },
                    child: Text(
                      "Back to Login",
                      style: theme.textTheme.labelLarge?.copyWith(
                        color: Colors.white,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                  ),
                ),

                const SizedBox(height: 25),

                /// SUPPORT TEXT
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      "Need help? ",
                      style: theme.textTheme.bodyMedium?.copyWith(
                        color: theme.colorScheme.onSurface.withValues(alpha: 0.7),
                      ),
                    ),
                    GestureDetector(
                      onTap: () {
                        // TODO: Add support contact functionality
                      },
                      child: Text(
                        "Contact Support",
                        style: theme.textTheme.labelLarge?.copyWith(
                          color: AppTheme.primaryGreen,
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../../../../app/app_theme.dart';
import '../../../../app/theme_provider.dart';
import '../../../../shared/widgets/noor_card.dart';

class ProfileScreen extends StatefulWidget {
  const ProfileScreen({super.key});

  @override
  State<ProfileScreen> createState() => _ProfileScreenState();
}

class _ProfileScreenState extends State<ProfileScreen> {
  bool _notificationsEnabled = true;

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    
    return SafeArea(
      child: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          Text(
            'Profile', 
            style: theme.textTheme.headlineSmall?.copyWith(
              color: theme.colorScheme.onSurface,
              fontWeight: FontWeight.w700,
            ),
          ),
          const SizedBox(height: 16),
          NoorCard(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Welcome, Guest', 
                  style: theme.textTheme.titleMedium?.copyWith(
                    color: theme.colorScheme.onSurface,
                    fontWeight: FontWeight.w700,
                  ),
                ),
                const SizedBox(height: 8),
                Text(
                  'Login is optional. Continue as guest or sign in for synced reminders.',
                  style: theme.textTheme.bodyMedium?.copyWith(
                    color: theme.colorScheme.onSurface.withValues(alpha: 0.7),
                  ),
                ),
                const SizedBox(height: 16),
                Row(
                  children: [
                    Expanded(
                      child: FilledButton(
                        style: FilledButton.styleFrom(
                          backgroundColor: AppTheme.primaryGreen,
                          foregroundColor: Colors.white,
                          padding: const EdgeInsets.symmetric(vertical: 12),
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(12),
                          ),
                        ),
                        onPressed: () {},
                        child: Text(
                          'Login',
                          style: theme.textTheme.labelLarge?.copyWith(
                            color: Colors.white,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                      ),
                    ),
                    const SizedBox(width: 12),
                    Expanded(
                      child: OutlinedButton(
                        style: OutlinedButton.styleFrom(
                          foregroundColor: AppTheme.primaryGreen,
                          padding: const EdgeInsets.symmetric(vertical: 12),
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(12),
                          ),
                          side: const BorderSide(color: AppTheme.primaryGreen),
                        ),
                        onPressed: () {},
                        child: Text(
                          'Signup',
                          style: theme.textTheme.labelLarge?.copyWith(
                            color: AppTheme.primaryGreen,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
          const SizedBox(height: 12),
          NoorCard(
            child: Column(
              children: [
                SwitchListTile(
                  contentPadding: EdgeInsets.zero,
                  title: Text(
                    'Notifications',
                    style: theme.textTheme.labelLarge?.copyWith(
                      color: theme.colorScheme.onSurface,
                    ),
                  ),
                  subtitle: Text(
                    'Prayer reminders and announcements',
                    style: theme.textTheme.bodySmall?.copyWith(
                      color: theme.colorScheme.onSurface.withValues(alpha: 0.7),
                    ),
                  ),
                  value: _notificationsEnabled,
                  onChanged: (v) => setState(() => _notificationsEnabled = v),
                ),
                Divider(
                  height: 1,
                  color: theme.colorScheme.onSurface.withValues(alpha: 0.1),
                ),
                ListTile(
                  contentPadding: EdgeInsets.zero,
                  leading: Icon(
                    Icons.palette_outlined,
                    color: theme.colorScheme.onSurface.withValues(alpha: 0.7),
                  ),
                  title: Text(
                    'Theme',
                    style: theme.textTheme.labelLarge?.copyWith(
                      color: theme.colorScheme.onSurface,
                    ),
                  ),
                  subtitle: Text(
                    context.watch<ThemeProvider>().themeModeString,
                    style: theme.textTheme.bodySmall?.copyWith(
                      color: theme.colorScheme.onSurface.withValues(alpha: 0.7),
                    ),
                  ),
                  trailing: Icon(
                    Icons.chevron_right_rounded,
                    color: theme.colorScheme.onSurface.withValues(alpha: 0.5),
                  ),
                  onTap: () {
                    _showThemeDialog(context);
                  },
                ),
              ],
            ),
          ),
          const SizedBox(height: 12),
          NoorCard(
            child: Column(
              children: [
                ListTile(
                  contentPadding: EdgeInsets.zero,
                  leading: Icon(
                    Icons.feedback_outlined,
                    color: theme.colorScheme.onSurface.withValues(alpha: 0.7),
                  ),
                  title: Text(
                    'Send feedback',
                    style: theme.textTheme.labelLarge?.copyWith(
                      color: theme.colorScheme.onSurface,
                    ),
                  ),
                  trailing: Icon(
                    Icons.chevron_right_rounded,
                    color: theme.colorScheme.onSurface.withValues(alpha: 0.5),
                  ),
                  onTap: () {},
                ),
                Divider(
                  height: 1,
                  color: theme.colorScheme.onSurface.withValues(alpha: 0.1),
                ),
                ListTile(
                  contentPadding: EdgeInsets.zero,
                  leading: Icon(
                    Icons.logout_rounded,
                    color: theme.colorScheme.error,
                  ),
                  title: Text(
                    'Logout',
                    style: theme.textTheme.labelLarge?.copyWith(
                      color: theme.colorScheme.error,
                    ),
                  ),
                  trailing: Icon(
                    Icons.chevron_right_rounded,
                    color: theme.colorScheme.onSurface.withValues(alpha: 0.5),
                  ),
                  onTap: () {},
                ),
              ],
            ),
          ),
          const SizedBox(height: 12),
          Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              color: AppTheme.accentGold.withValues(alpha: 0.1),
              borderRadius: BorderRadius.circular(16),
              border: theme.brightness == Brightness.dark
                  ? Border.all(color: AppTheme.accentGold.withValues(alpha: 0.3))
                  : null,
            ),
            child: Row(
              children: [
                Icon(
                  Icons.star_rounded, 
                  color: AppTheme.accentGold,
                  size: 24,
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Text(
                    'Special announcements and seasonal reminders appear here.',
                    style: theme.textTheme.bodyMedium?.copyWith(
                      color: theme.colorScheme.onSurface,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  void _showThemeDialog(BuildContext context) {
    final themeProvider = context.read<ThemeProvider>();
    
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text(
            'Choose Theme',
            style: Theme.of(context).textTheme.titleLarge?.copyWith(
              fontWeight: FontWeight.w700,
            ),
          ),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              _buildThemeOption(
                context,
                'Light',
                Icons.light_mode_outlined,
                ThemeMode.light,
                themeProvider.themeMode == ThemeMode.light,
              ),
              _buildThemeOption(
                context,
                'Dark',
                Icons.dark_mode_outlined,
                ThemeMode.dark,
                themeProvider.themeMode == ThemeMode.dark,
              ),
              _buildThemeOption(
                context,
                'System',
                Icons.settings_outlined,
                ThemeMode.system,
                themeProvider.themeMode == ThemeMode.system,
              ),
            ],
          ),
        );
      },
    );
  }

  Widget _buildThemeOption(
    BuildContext context,
    String title,
    IconData icon,
    ThemeMode themeMode,
    bool isSelected,
  ) {
    final theme = Theme.of(context);
    
    return ListTile(
      contentPadding: EdgeInsets.zero,
      leading: Icon(
        icon,
        color: isSelected ? AppTheme.primaryGreen : theme.colorScheme.onSurface.withValues(alpha: 0.7),
      ),
      title: Text(
        title,
        style: theme.textTheme.bodyLarge?.copyWith(
          color: isSelected ? AppTheme.primaryGreen : theme.colorScheme.onSurface,
          fontWeight: isSelected ? FontWeight.w600 : FontWeight.w400,
        ),
      ),
      trailing: isSelected
          ? Icon(
              Icons.check_circle,
              color: AppTheme.primaryGreen,
            )
          : null,
      onTap: () {
        context.read<ThemeProvider>().setThemeMode(themeMode);
        Navigator.of(context).pop();
      },
    );
  }
}

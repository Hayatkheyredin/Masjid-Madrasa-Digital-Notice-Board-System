import 'package:flutter/material.dart';

import '../../../../app/app_theme.dart';
import '../../../../shared/widgets/noor_card.dart';
import '../../data/prayer_time_service.dart';

class PrayerScreen extends StatefulWidget {
  const PrayerScreen({super.key});

  @override
  State<PrayerScreen> createState() => _PrayerScreenState();
}

class _PrayerScreenState extends State<PrayerScreen> {
  bool _useAutoLocation = true;
  String _selectedMasjid = 'Noor Central Masjid';

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final prayerTimes = PrayerTimeService.getPrayerTimes();
    
    return SafeArea(
      child: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          Text(
            'Prayer Timetable', 
            style: theme.textTheme.headlineSmall?.copyWith(
              color: theme.colorScheme.onSurface,
            ),
          ),
          const SizedBox(height: 16),
          NoorCard(
            child: Column(
              children: [
                SwitchListTile(
                  contentPadding: EdgeInsets.zero,
                  title: Text(
                    'Auto location',
                    style: theme.textTheme.labelLarge?.copyWith(
                      color: theme.colorScheme.onSurface,
                    ),
                  ),
                  subtitle: Text(
                    _useAutoLocation 
                        ? 'Using device location' 
                        : 'Manual selection enabled',
                    style: theme.textTheme.bodySmall?.copyWith(
                      color: theme.colorScheme.onSurface.withValues(alpha: 0.7),
                    ),
                  ),
                  value: _useAutoLocation,
                  onChanged: (value) {
                    setState(() => _useAutoLocation = value);
                    if (value) {
                      ScaffoldMessenger.of(context).showSnackBar(
                        SnackBar(
                          content: const Text('Location feature will be enabled after backend integration'),
                          duration: const Duration(seconds: 2),
                          backgroundColor: AppTheme.primaryGreen,
                        ),
                      );
                    }
                  },
                ),
                const SizedBox(height: 12),
                Container(
                  decoration: BoxDecoration(
                    color: theme.cardColor,
                    borderRadius: BorderRadius.circular(12),
                    border: theme.brightness == Brightness.dark 
                        ? Border.all(color: theme.colorScheme.outline.withValues(alpha: 0.3))
                        : null,
                  ),
                  child: DropdownButtonFormField<String>(
                    value: _selectedMasjid,
                    decoration: InputDecoration(
                      labelText: 'Manual masjid selection',
                      labelStyle: theme.textTheme.labelMedium?.copyWith(
                        color: theme.colorScheme.onSurface.withValues(alpha: 0.7),
                      ),
                      border: InputBorder.none,
                      contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                    ),
                    style: theme.textTheme.bodyMedium?.copyWith(
                      color: theme.colorScheme.onSurface,
                    ),
                    dropdownColor: theme.cardColor,
                    items: [
                      DropdownMenuItem(
                        value: 'Noor Central Masjid',
                        child: Text(
                          'Noor Central Masjid',
                          style: theme.textTheme.bodyMedium,
                        ),
                      ),
                      DropdownMenuItem(
                        value: 'Anwar Masjid',
                        child: Text(
                          'Anwar Masjid',
                          style: theme.textTheme.bodyMedium,
                        ),
                      ),
                      DropdownMenuItem(
                        value: 'Rahma Masjid',
                        child: Text(
                          'Rahma Masjid',
                          style: theme.textTheme.bodyMedium,
                        ),
                      ),
                    ],
                    onChanged: _useAutoLocation
                        ? null
                        : (value) {
                            if (value != null) {
                              setState(() => _selectedMasjid = value);
                            }
                          },
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 16),
          ...prayerTimes.map(
            (item) => Padding(
              padding: const EdgeInsets.only(bottom: 12),
              child: Container(
                decoration: BoxDecoration(
                  color: item.isCurrent ? AppTheme.primaryGreen : theme.cardColor,
                  borderRadius: BorderRadius.circular(16),
                  border: theme.brightness == Brightness.dark && !item.isCurrent
                      ? Border.all(color: theme.colorScheme.outline.withValues(alpha: 0.3))
                      : null,
                  boxShadow: theme.brightness == Brightness.light && !item.isCurrent ? [
                    BoxShadow(
                      color: Colors.black.withValues(alpha: 0.05),
                      blurRadius: 8,
                      offset: const Offset(0, 2),
                    ),
                  ] : null,
                ),
                child: ListTile(
                  contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                  leading: Container(
                    width: 40,
                    height: 40,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      color: item.isCurrent 
                          ? Colors.white.withValues(alpha: 0.2)
                          : AppTheme.primaryGreen.withValues(alpha: 0.1),
                    ),
                    child: Icon(
                      Icons.schedule_rounded,
                      color: item.isCurrent 
                          ? Colors.white 
                          : AppTheme.primaryGreen,
                      size: 20,
                    ),
                  ),
                  title: Text(
                    item.name,
                    style: theme.textTheme.labelLarge?.copyWith(
                      color: item.isCurrent 
                          ? Colors.white 
                          : theme.colorScheme.onSurface,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                  trailing: Text(
                    item.time,
                    style: theme.textTheme.bodyLarge?.copyWith(
                      color: item.isCurrent 
                          ? Colors.white 
                          : theme.colorScheme.onSurface,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

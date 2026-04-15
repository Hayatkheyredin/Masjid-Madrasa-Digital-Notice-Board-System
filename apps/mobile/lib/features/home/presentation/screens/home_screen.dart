import 'package:flutter/material.dart';

import '../../../prayer/data/prayer_time_service.dart';
import '../../../prayer/data/sample_prayer_data.dart';
import '../widgets/announcements_section.dart';
import '../widgets/next_prayer_card.dart';
import '../widgets/prayer_times_card.dart';
import '../../../../app/app_theme.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final nextPrayer = PrayerTimeService.getNextPrayer();
    
    return SafeArea(
      child: SingleChildScrollView(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'NoorMasjid',
              style: theme.textTheme.headlineSmall?.copyWith(
                color: theme.colorScheme.onSurface,
                fontWeight: FontWeight.w700,
              ),
            ),
            const SizedBox(height: 4),
            Text(
              'Stay connected with your masjid.',
              style: theme.textTheme.bodyMedium?.copyWith(
                color: theme.colorScheme.onSurface.withValues(alpha: 0.7),
              ),
            ),
            const SizedBox(height: 20),
            NextPrayerCard(
              prayerName: nextPrayer['name']!,
              countdown: nextPrayer['countdown']!,
            ),
            const SizedBox(height: 20),
            Text(
              "Today's Prayer Times", 
              style: theme.textTheme.titleMedium?.copyWith(
                color: theme.colorScheme.onSurface,
                fontWeight: FontWeight.w700,
              ),
            ),
            const SizedBox(height: 12),
            PrayerTimesCard(items: prayerTimes),
            const SizedBox(height: 20),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  'Announcements', 
                  style: theme.textTheme.titleMedium?.copyWith(
                    color: theme.colorScheme.onSurface,
                    fontWeight: FontWeight.w700,
                  ),
                ),
                TextButton(
                  onPressed: () {},
                  style: TextButton.styleFrom(
                    foregroundColor: AppTheme.primaryGreen,
                    padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                  ),
                  child: Text(
                    'View all',
                    style: theme.textTheme.labelMedium?.copyWith(
                      color: AppTheme.primaryGreen,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 8),
            const AnnouncementsSection(),
          ],
        ),
      ),
    );
  }
}

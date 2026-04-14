import 'package:flutter/material.dart';

import '../../../../app/app_theme.dart';
import '../../../../shared/widgets/noor_card.dart';
import '../../../prayer/domain/prayer_time.dart';

class PrayerTimesCard extends StatelessWidget {
  const PrayerTimesCard({
    super.key,
    required this.items,
  });

  final List<PrayerTime> items;

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    
    return NoorCard(
      child: Column(
        children: items
            .asMap()
            .entries
            .map(
              (entry) {
                final index = entry.key;
                final item = entry.value;
                
                return Container(
                  margin: EdgeInsets.only(bottom: index < items.length - 1 ? 8 : 0),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(12),
                    color: item.isCurrent
                        ? AppTheme.primaryGreen
                        : theme.cardColor,
                    border: theme.brightness == Brightness.dark && !item.isCurrent
                        ? Border.all(color: theme.colorScheme.outline.withValues(alpha: 0.3))
                        : null,
                  ),
                  child: ListTile(
                    dense: true,
                    contentPadding: const EdgeInsets.symmetric(horizontal: 12, vertical: 4),
                    leading: Container(
                      width: 32,
                      height: 32,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        color: item.isCurrent 
                            ? Colors.white.withValues(alpha: 0.2)
                            : AppTheme.primaryGreen.withValues(alpha: 0.1),
                      ),
                      child: Icon(
                        Icons.wb_sunny_outlined,
                        size: 16,
                        color: item.isCurrent 
                            ? Colors.white 
                            : AppTheme.primaryGreen,
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
                      style: theme.textTheme.bodyMedium?.copyWith(
                        fontWeight: FontWeight.w500,
                        color: item.isCurrent 
                            ? Colors.white 
                            : theme.colorScheme.onSurface,
                      ),
                    ),
                  ),
                );
              },
            )
            .toList(),
      ),
    );
  }
}

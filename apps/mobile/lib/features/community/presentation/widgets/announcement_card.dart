import 'package:flutter/material.dart';

import '../../../../app/app_theme.dart';
import '../../../../shared/widgets/noor_card.dart';

class AnnouncementCard extends StatelessWidget {
  const AnnouncementCard({
    super.key,
    required this.title,
    required this.description,
    required this.date,
    this.onTap,
  });

  final String title;
  final String description;
  final String date;
  final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    
    return NoorCard(
      child: InkWell(
        borderRadius: BorderRadius.circular(16),
        onTap: onTap,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              title, 
              style: theme.textTheme.titleMedium?.copyWith(
                color: theme.colorScheme.onSurface,
                fontWeight: FontWeight.w700,
              ),
            ),
            const SizedBox(height: 8),
            Text(
              description,
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
              style: theme.textTheme.bodyMedium?.copyWith(
                color: theme.colorScheme.onSurface.withValues(alpha: 0.7),
              ),
            ),
            const SizedBox(height: 12),
            Row(
              children: [
                Icon(
                  Icons.schedule_outlined,
                  size: 16,
                  color: AppTheme.primaryGreen,
                ),
                const SizedBox(width: 4),
                Text(
                  date,
                  style: theme.textTheme.labelMedium?.copyWith(
                    color: AppTheme.primaryGreen,
                    fontWeight: FontWeight.w600,
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

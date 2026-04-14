import 'package:flutter/material.dart';

import '../../../../app/app_theme.dart';
import '../widgets/announcement_card.dart';
import '../widgets/class_card.dart';
import '../widgets/khutbah_card.dart';
import 'khutbah_detail_screen.dart';

class CommunityScreen extends StatelessWidget {
  const CommunityScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    
    return DefaultTabController(
      length: 4,
      child: SafeArea(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(16, 12, 16, 0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                    'Community', 
                    style: theme.textTheme.headlineSmall?.copyWith(
                      color: theme.colorScheme.onSurface,
                      fontWeight: FontWeight.w700,
                    ),
                  ),
                  Icon(
                    Icons.groups_rounded,
                    color: AppTheme.primaryGreen,
                  ),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(16, 16, 16, 8),
              child: TabBar(
                isScrollable: true,
                tabAlignment: TabAlignment.start,
                labelColor: AppTheme.primaryGreen,
                unselectedLabelColor: theme.colorScheme.onSurface.withValues(alpha: 0.6),
                indicatorColor: AppTheme.primaryGreen,
                labelStyle: theme.textTheme.labelLarge?.copyWith(
                  fontWeight: FontWeight.w600,
                ),
                unselectedLabelStyle: theme.textTheme.labelLarge?.copyWith(
                  fontWeight: FontWeight.w500,
                ),
                tabs: const [
                  Tab(text: 'All'),
                  Tab(text: 'Announcements'),
                  Tab(text: 'Classes'),
                  Tab(text: 'Friday Khutbah'),
                ],
              ),
            ),
            Expanded(
              child: TabBarView(
                children: [
                  _buildAllTab(context),
                  _buildAnnouncementsTab(context),
                  _buildClassesTab(),
                  _buildKhutbahTab(context),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildAllTab(BuildContext context) {
    return ListView(
      padding: const EdgeInsets.all(16),
      children: [
        AnnouncementCard(
          title: 'Community Iftar This Saturday',
          description: 'Bring your family and join us after Asr for a shared iftar.',
          date: 'Apr 18, 2026',
          onTap: () {},
        ),
        const SizedBox(height: 10),
        const ClassCard(
          title: 'Sahih Bukhari',
          teacher: 'Ustadh Yusuf Ahmed',
          schedule: 'Mon & Thu • 8:00 PM',
        ),
        const SizedBox(height: 10),
        KhutbahCard(
          title: 'Taqwa in Daily Life',
          imamName: 'Imam Musa Kareem',
          date: 'Apr 12, 2026',
          summary: 'A practical khutbah on living with sincerity, patience, and gratitude.',
          onListen: () {},
          onNotes: () {},
          onTap: () => _openKhutbahDetail(context),
        ),
      ],
    );
  }

  Widget _buildAnnouncementsTab(BuildContext context) {
    return ListView(
      padding: const EdgeInsets.all(16),
      children: [
        AnnouncementCard(
          title: 'Masjid Cleaning Drive',
          description: 'Volunteers needed this Sunday morning after Fajr.',
          date: 'Apr 15, 2026',
          onTap: () {},
        ),
        const SizedBox(height: 10),
        AnnouncementCard(
          title: 'Eid Preparation Meeting',
          description: 'Open planning session for logistics and community support.',
          date: 'Apr 20, 2026',
          onTap: () {},
        ),
        const SizedBox(height: 10),
        AnnouncementCard(
          title: 'Sisters Study Circle',
          description: 'Weekly tafsir circle every Wednesday after Maghrib.',
          date: 'Weekly',
          onTap: () {},
        ),
      ],
    );
  }

  Widget _buildClassesTab() {
    return ListView(
      padding: const EdgeInsets.all(16),
      children: const [
        ClassCard(
          title: 'Sahih Bukhari',
          teacher: 'Ustadh Yusuf Ahmed',
          schedule: 'Mon & Thu • 8:00 PM',
        ),
        SizedBox(height: 10),
        ClassCard(
          title: 'Tajweed for Adults',
          teacher: 'Ustadha Maryam Ali',
          schedule: 'Sat • 10:00 AM',
        ),
        SizedBox(height: 10),
        ClassCard(
          title: 'Seerah Essentials',
          teacher: 'Sh. Ibrahim Noor',
          schedule: 'Tue • 7:30 PM',
        ),
      ],
    );
  }

  Widget _buildKhutbahTab(BuildContext context) {
    return ListView(
      padding: const EdgeInsets.all(16),
      children: [
        KhutbahCard(
          title: 'Taqwa in Daily Life',
          imamName: 'Imam Musa Kareem',
          date: 'Apr 12, 2026',
          summary: 'A practical khutbah on living with sincerity, patience, and gratitude.',
          onListen: () {},
          onNotes: () {},
          onTap: () => _openKhutbahDetail(context),
        ),
      ],
    );
  }

  void _openKhutbahDetail(BuildContext context) {
    Navigator.of(context).push(
      MaterialPageRoute<void>(
        builder: (_) => const KhutbahDetailScreen(
          title: 'Taqwa in Daily Life',
          imamName: 'Imam Musa Kareem',
          date: 'Apr 12, 2026',
        ),
      ),
    );
  }
}

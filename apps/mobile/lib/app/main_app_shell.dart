import 'package:flutter/material.dart';

import '../features/community/presentation/screens/community_screen.dart';
import '../features/home/presentation/screens/home_screen.dart';
import '../features/prayer/presentation/screens/prayer_screen.dart';
import '../features/profile/presentation/screens/profile_screen.dart';

class MainAppShell extends StatefulWidget {
  const MainAppShell({super.key});

  @override
  State<MainAppShell> createState() => _MainAppShellState();
}

class _MainAppShellState extends State<MainAppShell> {
  int _currentIndex = 0;

  Widget _getCurrentTab() {
    switch (_currentIndex) {
      case 0:
        return const HomeScreen();
      case 1:
        return const PrayerScreen();
      case 2:
        return const CommunityScreen();
      case 3:
        return const ProfileScreen();
      default:
        return const HomeScreen();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _getCurrentTab(),
      bottomNavigationBar: BottomNavigationBar(
        type: BottomNavigationBarType.fixed,
        currentIndex: _currentIndex,
        onTap: (index) => setState(() => _currentIndex = index),
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.home_rounded), label: 'Home'),
          BottomNavigationBarItem(
            icon: Icon(Icons.schedule_rounded),
            label: 'Prayer',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.groups_rounded),
            label: 'Community',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person_rounded),
            label: 'Profile',
          ),
        ],
      ),
    );
  }
}

import '../domain/prayer_time.dart';

/// Service to calculate current prayer and next prayer dynamically
/// TODO: Replace with actual calculation based on location and date
class PrayerTimeService {
  static const List<PrayerTime> _basePrayerTimes = [
    PrayerTime(name: 'Fajr', time: '05:12 AM'),
    PrayerTime(name: 'Sunrise', time: '06:45 AM'),
    PrayerTime(name: 'Dhuhr', time: '12:30 PM'),
    PrayerTime(name: 'Asr', time: '03:45 PM'),
    PrayerTime(name: 'Maghrib', time: '06:15 PM'),
    PrayerTime(name: 'Isha', time: '07:45 PM'),
  ];

  /// Get prayer times with current prayer marked dynamically
  static List<PrayerTime> getPrayerTimes() {
    final now = DateTime.now();
    final currentHour = now.hour;
    final currentMinute = now.minute;

    // Simple logic: mark prayer as current based on time
    // TODO: Replace with proper calculation
    int currentIndex = _getCurrentPrayerIndex(currentHour, currentMinute);

    return _basePrayerTimes.asMap().entries.map((entry) {
      return PrayerTime(
        name: entry.value.name,
        time: entry.value.time,
        isCurrent: entry.key == currentIndex,
      );
    }).toList();
  }

  /// Get the next prayer info
  static Map<String, String> getNextPrayer() {
    final now = DateTime.now();
    final currentHour = now.hour;
    final currentMinute = now.minute;

    int nextIndex = _getNextPrayerIndex(currentHour, currentMinute);
    
    // TODO: Calculate actual countdown
    return {
      'name': _basePrayerTimes[nextIndex].name,
      'countdown': 'Coming soon',
    };
  }

  static int _getCurrentPrayerIndex(int hour, int minute) {
    // Fajr: 5:12 - 6:45
    if (hour < 6 || (hour == 6 && minute < 45)) return 0;
    // Sunrise: 6:45 - 12:30
    if (hour < 12 || (hour == 12 && minute < 30)) return 1;
    // Dhuhr: 12:30 - 15:45
    if (hour < 15 || (hour == 15 && minute < 45)) return 2;
    // Asr: 15:45 - 18:15
    if (hour < 18 || (hour == 18 && minute < 15)) return 3;
    // Maghrib: 18:15 - 19:45
    if (hour < 19 || (hour == 19 && minute < 45)) return 4;
    // Isha: 19:45 - 5:12
    return 5;
  }

  static int _getNextPrayerIndex(int hour, int minute) {
    int current = _getCurrentPrayerIndex(hour, minute);
    return (current + 1) % _basePrayerTimes.length;
  }
}

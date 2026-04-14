import '../domain/prayer_time.dart';
import 'prayer_time_service.dart';

List<PrayerTime> get prayerTimes => PrayerTimeService.getPrayerTimes();

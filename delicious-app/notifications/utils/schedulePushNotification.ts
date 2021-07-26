import * as Notifications from 'expo-notifications';
import { registerForPushNotificationsAsync } from './registerForPushNotificationsAsync';

export const schedulePushNotification = async (notification: Notifications.NotificationRequestInput) => {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });
  await registerForPushNotificationsAsync();
  await Notifications.scheduleNotificationAsync(notification);
};
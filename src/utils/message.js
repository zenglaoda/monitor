import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/notification/style/css'
import { ElMessage, ElNotification } from 'element-plus';

export function Message(options) {
  if (typeof options === 'string') {
    options = {
      message: options,
    };
  }
  options.type = options.type || 'error';
  ElMessage(options);
}

export function Notify(options) {
  if (typeof options === 'string') {
    options = {
      message: options,
    };
  }
  options.type = options.type || 'error';
  ElNotification(options);
}
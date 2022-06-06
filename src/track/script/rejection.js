export function createRejectionEventId(event) {
  let reason = event.reason;

  if (reason && typeof reason === 'object') {
    try {
      reason = JSON.stringify(reason);
    } catch (e) {}
  }
  reason = String(reason);
}

export function extractRejectionMeta(event) {
  return {
    message: event.reason,
    type: event.type,
    lineno: event.lineno,
    colno: event.colno,
    filename: event.filename,
    error: {
      message: event.reason,
    }
  };
}


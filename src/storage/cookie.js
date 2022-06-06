import jsCookie from "js-cookie";

export function setProjectId(payload) {
  jsCookie.set('projectId', payload);
}
export function getProjectId() {
  return jsCookie.get('projectId');
}

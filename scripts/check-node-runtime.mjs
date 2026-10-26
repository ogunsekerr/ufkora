// October 21, 2026 security baseline. Keep Vercel on the Node 24 LTS line.
export function assertSecureNode(version = process.versions.node) {
  const match = /^24\.(\d+)\.(\d+)$/.exec(version);
  if (!match || Number(match[1]) < 22 || (Number(match[1]) === 22 && Number(match[2]) < 1)) {
    throw new Error('Security baseline requires Node.js >=24.22.1 <25. Update the runtime before starting this application.');
  }
  return version;
}
assertSecureNode();
console.info('[runtime-security] Node.js ' + process.versions.node + ' meets the October 2026 security baseline.');

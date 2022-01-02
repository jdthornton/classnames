
export default function classNames(...classStrs: any[]): string {
  return [...classStrs].filter(s => typeof s === 'string').join(' ');
}

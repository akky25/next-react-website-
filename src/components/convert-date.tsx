import { parseISO, format } from 'date-fns';
import ja from 'date-fns/locale/ja';

export default function ConvertDate({ dateISO }: { dateISO: string }) {
  return (
    <time dateTime={dateISO}>
      {format(parseISO(dateISO), 'yyyy 年 MM 月 dd 日 ', {
        locale: ja,
      })}
    </time>
  );
}

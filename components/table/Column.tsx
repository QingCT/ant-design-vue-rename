import { defineComponent } from 'vue';
import type { ColumnType } from './interface';

export type ColumnProps<RecordType = unknown> = ColumnType<RecordType>;
export default defineComponent<ColumnProps>({
  name: 'BmaTableColumn',
  slots: ['title', 'filterIcon'],
  render() {
    return null;
  },
});

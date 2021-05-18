import { default as CodeStatuses } from './CodeStatuses';
import { default as Phrases } from './Phrases';
import { default as StatusCodes } from './StatusCodes';
declare function getReasonMessage(status: number | string): string;
export default getReasonMessage;
export { CodeStatuses, Phrases, StatusCodes, };

import { default as CodeStatuses } from './CodeStatuses';
import { default as Phrases } from './Phrases';
import { default as StatusCodes } from './StatusCodes';
function getReasonMessage(status) {
    if (CodeStatuses.hasOwnProperty(status.toString())) {
        return Phrases[status];
    }
    if (StatusCodes.hasOwnProperty(status)) {
        return Phrases[StatusCodes[status]];
    }
    throw new Error("Status code does not exist: " + status);
}
export default getReasonMessage;
export { CodeStatuses, Phrases, StatusCodes, };
//# sourceMappingURL=index.js.map
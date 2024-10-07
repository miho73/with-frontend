function verifyAll(
  ok?: () => void,
  notOk?: (flags: number) => void,
  ...validity: number[]
) {
  if(validity.every(v => v === -1)) {
    ok && ok()
  }
  else {
    let flags = 0;
    validity.forEach(v => {
      if(v !== -1) {
        flags |= (1 << v)
      }
    });

    notOk && notOk(flags)
  }
}

function checkFlag(flag: number, index: number) {
  return (flag & (1 << index)) !== 0
}

function regexCheck(value: string, regex: RegExp, index: number) {
  return regex.test(value) ? -1 : index
}
function lengthCheckMin(value: string, min: number, index: number) {
  if(!value) return index;
  return value.length >= min ? -1 : index
}
function lengthCheckMax(value: string, max: number, index: number) {
  if(!value) return index;
  return value.length <= max ? -1 : index
}
function lengthCheck(value: string, min: number, max: number, index: number) {
  if (!value) return index;
  return value.length >= min && value.length <= max ? -1 : index;
}
function valueOneOf(value: string, values: string[], index: number) {
  return values.includes(value) ? -1 : index
}

function checkSingle(flag: number, value: boolean, index: number) {
  if(value) {
    return flag;
  }
  else {
    return flag | (1 << index);
  }
}

export {
  verifyAll,
  regexCheck,
  lengthCheckMax,
  lengthCheckMin,
  lengthCheck,
  valueOneOf,
  checkSingle,
  checkFlag
}

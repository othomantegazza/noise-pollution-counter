console.log("ciao")

function makeLog(logType) {
  const newLog = {fonte: logType, istante: Date.now()}
  console.log(newLog)
  logs.push(newLog)
  return newLog
}

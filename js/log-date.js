function logsToCSV(logs) {
  const csvString = [
    [
      "Fonte",
      "Istante"
    ],
    ...logs.map(item => [
      item.fonte,
      item.istante
    ])
  ]
   .map(e => e.join(",")) 
   .join("\n");
}

function makeLog(logType) {
  const newLog = {fonte: logType, istante: Date.now()}
  logs.push(newLog)
  logsToCSV(logs)
  return newLog
}

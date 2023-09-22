console.log("ciao")

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

console.log(csvString);
}

function makeLog(logType) {
  const newLog = {fonte: logType, istante: Date.now()}
  console.log(newLog)
  logs.push(newLog)
  logsToCSV(logs)
  return newLog
}

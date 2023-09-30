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
   .map(e => e.join(", ")) 
   .join("\n");
   
   return csvString
}

function makeLog(logType) {
  const stamp = new Date
  const d = `${stamp.getDate()}-${stamp.getMonth()+1}-${stamp.getFullYear()}`
  const t = `${stamp.getHours()}:${stamp.getMinutes()}:${stamp.getSeconds()}`
  const newLog = {
    fonte: logType, 
    istante: d + ' ' + t
  }
  logs.push(newLog)
  document.getElementById('logsPre').innerHTML = logsToCSV(logs)
  return newLog
}

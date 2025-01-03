//CODE STEPS.
//code bible version number to variable bible_ver
// if 
//create array with mcheyne reading plan, starting on day 0
//calculate day number in year (skip leap day)
//identify line in array that corresponds with day of year
//create hyperlinks for yesterday, today, and tomorrow, with the following pattern.
//  https.//www.bible.com/bible/", bible_ver, "/", line, ".BGO"

//DEFINE DAY_NUMBER (jan 1 = 1, skipping leap day)
// Get today's date
const today = new Date();

// Calculate the start of the year
const startOfYear = new Date(today.getFullYear(), 0, 1);

// Calculate the difference in days (ignoring leap day)
const oneDay = 1000 * 60 * 60 * 24; // Milliseconds in a day
let day_number = Math.floor((today - startOfYear) / oneDay) + 1;

// Skip leap day (February 29) if this is after February 28
const isLeapYear = (year) => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
if (isLeapYear(today.getFullYear()) && today > new Date(today.getFullYear(), 1, 28)) {
    day_number -= 1;
}


const mcheynePlan = [
["GEN.1", "MAT.1", "EZR.1", "ACT.1"],
["GEN.2", "MAT.2", "EZR.2", "ACT.2"],
["GEN.3", "MAT.3", "EZR.3", "ACT.3"],
["GEN.4", "MAT.4", "EZR.4", "ACT.4"],
["GEN.5", "MAT.5", "EZR.5", "ACT.5"],
["GEN.6", "MAT.6", "EZR.6", "ACT.6"],
["GEN.7", "MAT.7", "EZR.7", "ACT.7"],
["GEN.8", "MAT.8", "EZR.8", "ACT.8"],
["GEN.9", "GEN.10", "MAT.9", "EZR.9", "ACT.9"],
["GEN.11", "MAT.10", "EZR.10", "ACT.10"],
["GEN.12", "MAT.11", "NEH.1", "ACT.11"],
["GEN.13", "MAT.12", "NEH.2", "ACT.12"],
["GEN.14", "MAT.13", "NEH.3", "ACT.13"],
["GEN.15", "MAT.14", "NEH.4", "ACT.14"],
["GEN.16", "MAT.15", "NEH.5", "ACT.15"],
["GEN.17", "MAT.16", "NEH.6", "ACT.16"],
["GEN.18", "MAT.17", "NEH.7", "ACT.17"],
["GEN.19", "MAT.18", "NEH.8", "ACT.18"],
["GEN.20", "MAT.19", "NEH.9", "ACT.19"],
["GEN.21", "MAT.20", "NEH.10", "ACT.20"],
["GEN.22", "MAT.21", "NEH.11", "ACT.21"],
["GEN.23", "MAT.22", "NEH.12", "ACT.22"],
["GEN.24", "MAT.23", "NEH.13", "ACT.23"],
["GEN.25", "MAT.24", "EST.1", "ACT.24"],
["GEN.26", "MAT.25", "EST.2", "ACT.25"],
["GEN.27", "MAT.26", "EST.3", "ACT.26"],
["GEN.28", "MAT.27", "EST.4", "ACT.27"],
["GEN.29", "MAT.28", "EST.5", "ACT.28"],
["GEN.30", "MAR.1", "EST.6", "ROM.1"],
["GEN.31", "MAR.2", "EST.7", "ROM.2"],
["GEN.32", "MAR.3", "EST.8", "ROM.3"],
["GEN.33", "MAR.4", "EST.9", "EST.10", "ROM.4"],
["GEN.34", "MAR.5", "JOB.1", "ROM.5"],
["GEN.35", "GEN.36", "MAR.6", "JOB.2", "ROM.6"],
["GEN.37", "MAR.7", "JOB.3", "ROM.7"],
["GEN.38", "MAR.8", "JOB.4", "ROM.8"],
["GEN.39", "MAR.9", "JOB.5", "ROM.9"],
["GEN.40", "MAR.10", "JOB.6", "ROM.10"],
["GEN.41", "MAR.11", "JOB.7", "ROM.11"],
["GEN.42", "MAR.12", "JOB.8", "ROM.12"],
["GEN.43", "MAR.13", "JOB.9", "ROM.13"],
["GEN.44", "MAR.14", "JOB.10", "ROM.14"],
["GEN.45", "MAR.15", "JOB.11", "ROM.15"],
["GEN.46", "MAR.16", "JOB.12", "ROM.16"],
["GEN.47", "LUK.1.1‐38", "JOB.13", "1CO.1"],
["GEN.48", "LUK.1.39‐80", "JOB.14", "1CO.2"],
["GEN.49", "LUK.2", "JOB.15", "1CO.3"],
["GEN.50", "LUK.3", "JOB.16", "JOB.17", "1CO.4"],
["EXO.1", "LUK.4", "JOB.18", "1CO.5"],
["EXO.2", "LUK.5", "JOB.19", "1CO.6"],
["EXO.3", "LUK.6", "JOB.20", "1CO.7"],
["EXO.4", "LUK.7", "JOB.21", "1CO.8"],
["EXO.5", "LUK.8", "JOB.22", "1CO.9"],
["EXO.6", "LUK.9", "JOB.23", "1CO.10"],
["EXO.7", "LUK.10", "JOB.24", "1CO.11"],
["EXO.8", "LUK.11", "JOB.25", "JOB.26", "1CO.12"],
["EXO.9", "LUK.12", "JOB.27", "1CO.13"],
["EXO.10", "LUK.13", "JOB.28", "1CO.14"],
["EXO.11", "LUK.14", "JOB.29", "1CO.15"],
["EXO.12", "LUK.15", "JOB.30", "1CO.16"],
["EXO.13", "LUK.16", "JOB.31", "2CO.1"],
["EXO.14", "LUK.17", "JOB.32", "2CO.2"],
["EXO.15", "LUK.18", "JOB.33", "2CO.3"],
["EXO.16", "LUK.19", "JOB.34", "2CO.4"],
["EXO.17", "LUK.20", "JOB.35", "2CO.5"],
["EXO.18", "LUK.21", "JOB.36", "2CO.6"],
["EXO.19", "LUK.22", "JOB.37", "2CO.7"],
["EXO.20", "LUK.23", "JOB.38", "2CO.8"],
["EXO.21", "LUK.24", "JOB.39", "2CO.9"],
["EXO.22", "JHN.1", "JOB.40", "2CO.10"],
["EXO.23", "JHN.2", "JOB.41", "2CO.11"],
["EXO.24", "JHN.3", "JOB.42", "2CO.12"],
["EXO.25", "JHN.4", "PRO.1", "2CO.13"],
["EXO.26", "JHN.5", "PRO.2", "GAL.1"],
["EXO.27", "JHN.6", "PRO.3", "GAL.2"],
["EXO.28", "JHN.7", "PRO.4", "GAL.3"],
["EXO.29", "JHN.8", "PRO.5", "GAL.4"],
["EXO.30", "JHN.9", "PRO.6", "GAL.5"],
["EXO.31", "JHN.10", "PRO.7", "GAL.6"],
["EXO.32", "JHN.11", "PRO.8", "EPH.1"],
["EXO.33", "JHN.12", "PRO.9", "EPH.2"],
["EXO.34", "JHN.13", "PRO.10", "EPH.3"],
["EXO.35", "JHN.14", "PRO.11", "EPH.4"],
["EXO.36", "JHN.15", "PRO.12", "EPH.5"],
["EXO.37", "JHN.16", "PRO.13", "EPH.6"],
["EXO.38", "JHN.17", "PRO.14", "PHP.1"],
["EXO.39", "JHN.18", "PRO.15", "PHP.2"],
["EXO.40", "JHN.19", "PRO.16", "PHP.3"],
["LEV.1", "JHN.20", "PRO.17", "PHP.4"],
["LEV.2", "LEV.3", "JHN.21", "PRO.18", "COL.1"],
["LEV.4", "PSA.1", "PSA.2", "PRO.19", "COL.2"],
["LEV.5", "PSA.3", "PSA.4", "PRO.20", "COL.3"],
["LEV.6", "PSA.5", "PSA.6", "PRO.21", "COL.4"],
["LEV.7", "PSA.7", "PSA.8", "PRO.22", "1TH.1"],
["LEV.8", "PSA.9", "PRO.23", "1TH.2"],
["LEV.9", "PSA.10", "PRO.24", "1TH.3"],
["LEV.10", "PSA.11", "PSA.12", "PRO.25", "1TH.4"],
["LEV.11", "LEV.12", "PSA.13", "PSA.14", "PRO.26", "1TH.5"],
["LEV.13", "PSA.15", "PSA.16", "PRO.27", "2TH.1"],
["LEV.14", "PSA.17", "PRO.28", "2TH.2"],
["LEV.15", "PSA.18", "PRO.29", "2TH.3"],
["LEV.16", "PSA.19", "PRO.30", "1TI.1"],
["LEV.17", "PSA.20", "PSA.21", "PRO.31", "1TI.2"],
["LEV.18", "PSA.22", "ECC.1", "1TI.3"],
["LEV.19", "PSA.23", "PSA.24", "ECC.2", "1TI.4"],
["LEV.20", "PSA.25", "ECC.3", "1TI.5"],
["LEV.21", "PSA.26", "PSA.27", "ECC.4", "1TI.6"],
["LEV.22", "PSA.28", "PSA.29", "ECC.5", "2TI.1"],
["LEV.23", "PSA.30", "ECC.6", "2TI.2"],
["LEV.24", "PSA.31", "ECC.7", "2TI.3"],
["LEV.25", "PSA.32", "ECC.8", "2TI.4"],
["LEV.26", "PSA.33", "ECC.9", "TIT.1"],
["LEV.27", "PSA.34", "ECC.10", "TIT.2"],
["NUM.1", "PSA.35", "ECC.11", "TIT.3"],
["NUM.2", "PSA.36", "ECC.12", "PHM.1"],
["NUM.3", "PSA.37", "SNG.1", "HEB.1"],
["NUM.4", "PSA.38", "SNG.2", "HEB.2"],
["NUM.5", "PSA.39", "SNG.3", "HEB.3"],
["NUM.6", "PSA.40", "PSA.41", "SNG.4", "HEB.4"],
["NUM.7", "PSA.42", "PSA.43", "SNG.5", "HEB.5"],
["NUM.8", "PSA.44", "SNG.6", "HEB.6"],
["NUM.9", "PSA.45", "SNG.7", "HEB.7"],
["NUM.10", "PSA.46", "PSA.47", "SNG.8", "HEB.8"],
["NUM.11", "PSA.48", "ISA.1", "HEB.9"],
["NUM.12", "NUM.13", "PSA.49", "ISA.2", "HEB.10"],
["NUM.14", "PSA.50", "ISA.3", "ISA.4", "HEB.11"],
["NUM.15", "PSA.51", "ISA.5", "HEB.12"],
["NUM.16", "PSA.52", "PSA.53", "PSA.54", "ISA.6", "HEB.13"],
["NUM.17", "NUM.18", "PSA.55", "ISA.7", "JAM.1"],
["NUM.19", "PSA.56", "PSA.57", "ISA.8", "JAM.2"],
["NUM.20", "PSA.58", "PSA.59", "ISA.9", "JAM.3"],
["NUM.21", "PSA.60", "PSA.61", "ISA.10", "JAM.4"],
["NUM.22", "PSA.62", "PSA.63", "ISA.11", "ISA.12", "JAM.5"],
["NUM.23", "PSA.64", "PSA.65", "ISA.13", "1PE.1"],
["NUM.24", "PSA.66", "PSA.67", "ISA.14", "1PE.2"],
["NUM.25", "PSA.68", "ISA.15", "1PE.3"],
["NUM.26", "PSA.69", "ISA.16", "1PE.4"],
["NUM.27", "PSA.70", "PSA.71", "ISA.17", "ISA.18", "1PE.5"],
["NUM.28", "PSA.72", "ISA.19", "ISA.20", "2PE.1"],
["NUM.29", "PSA.73", "ISA.21", "2PE.2"],
["NUM.30", "PSA.74", "ISA.22", "2PE.3"],
["NUM.31", "PSA.75", "PSA.76", "ISA.23", "1JN.1"],
["NUM.32", "PSA.77", "ISA.24", "1JN.2"],
["NUM.33", "PSA.78.1‐39", "ISA.25", "1JN.3"],
["NUM.34", "PSA.78.40‐72", "ISA.26", "1JN.4"],
["NUM.35", "PSA.79", "ISA.27", "1JN.5"],
["NUM.36", "PSA.80", "ISA.28", "2JN.1"],
["DEU.1", "PSA.81", "PSA.82", "ISA.29", "3JN.1"],
["DEU.2", "PSA.83", "PSA.84", "ISA.30", "JUD.1"],
["DEU.3", "PSA.85", "ISA.31", "REV.1"],
["DEU.4", "PSA.86", "PSA.87", "ISA.32", "REV.2"],
["DEU.5", "PSA.88", "ISA.33", "REV.3"],
["DEU.6", "PSA.89", "ISA.34", "REV.4"],
["DEU.7", "PSA.90", "ISA.35", "REV.5"],
["DEU.8", "PSA.91", "ISA.36", "REV.6"],
["DEU.9", "PSA.92", "PSA.93", "ISA.37", "REV.7"],
["DEU.10", "PSA.94", "ISA.38", "REV.8"],
["DEU.11", "PSA.95", "PSA.96", "ISA.39", "REV.9"],
["DEU.12", "PSA.97", "PSA.98", "ISA.40", "REV.10"],
["DEU.13", "DEU.14", "PSA.99", "PSA.100", "PSA.101", "ISA.41", "REV.11"],
["DEU.15", "PSA.102", "ISA.42", "REV.12"],
["DEU.16", "PSA.103", "ISA.43", "REV.13"],
["DEU.17", "PSA.104", "ISA.44", "REV.14"],
["DEU.18", "PSA.105", "ISA.45", "REV.15"],
["DEU.19", "PSA.106", "ISA.46", "REV.16"],
["DEU.20", "PSA.107", "ISA.47", "REV.17"],
["DEU.21", "PSA.108", "PSA.109", "ISA.48", "REV.18"],
["DEU.22", "PSA.110", "PSA.111", "ISA.49", "REV.19"],
["DEU.23", "PSA.112", "PSA.113", "ISA.50", "REV.20"],
["DEU.24", "PSA.114", "PSA.115", "ISA.51", "REV.21"],
["DEU.25", "PSA.116", "ISA.52", "REV.22"],
["DEU.26", "PSA.117", "PSA.118", "ISA.53", "MAT.1"],
["DEU.27", "PSA.119.1‐24", "ISA.54", "MAT.2"],
["DEU.28", "PSA.119.25‐48", "ISA.55", "MAT.3"],
["DEU.29", "PSA.119.49‐72", "ISA.56", "MAT.4"],
["DEU.30", "PSA.119.73‐96", "ISA.57", "MAT.5"],
["DEU.31", "PSA.119.97‐120", "ISA.58", "MAT.6"],
["DEU.32", "PSA.119.121‐144", "ISA.59", "MAT.7"],
["DEU.33", "DEU.34", "PSA.119.145‐176", "ISA.60", "MAT.8"],
["JOS.1", "PSA.120", "PSA.121", "PSA.122", "ISA.61", "MAT.9"],
["JOS.2", "PSA.123", "PSA.124", "PSA.125", "ISA.62", "MAT.10"],
["JOS.3", "PSA.126", "PSA.127", "PSA.128", "ISA.63", "MAT.11"],
["JOS.4", "PSA.129", "PSA.130", "PSA.131", "ISA.64", "MAT.12"],
["JOS.5", "PSA.132", "PSA.133", "PSA.134", "ISA.65", "MAT.13"],
["JOS.6", "PSA.135", "PSA.136", "ISA.66", "MAT.14"],
["JOS.7", "PSA.137", "PSA.138", "JER.1", "MAT.15"],
["JOS.8", "PSA.139", "JER.2", "MAT.16"],
["JOS.9", "PSA.140", "PSA.141", "JER.3", "MAT.17"],
["JOS.10", "PSA.142", "PSA.143", "JER.4", "MAT.18"],
["JOS.11", "PSA.144", "JER.5", "MAT.19"],
["JOS.12", "JOS.13", "PSA.145", "JER.6", "MAT.20"],
["JOS.14", "JOS.15", "PSA.146", "PSA.147", "JER.7", "MAT.21"],
["JOS.16", "JOS.17", "PSA.148", "JER.8", "MAT.22"],
["JOS.18", "JOS.19", "PSA.149", "PSA.150", "JER.9", "MAT.23"],
["JOS.20", "JOS.21", "ACT.1", "JER.10", "MAT.24"],
["JOS.22", "ACT.2", "JER.11", "MAT.25"],
["JOS.23", "ACT.3", "JER.12", "MAT.26"],
["JOS.24", "ACT.4", "JER.13", "MAT.27"],
["JDG.1", "ACT.5", "JER.14", "MAT.28"],
["JDG.2", "ACT.6", "JER.15", "MAR.1"],
["JDG.3", "ACT.7", "JER.16", "MAR.2"],
["JDG.4", "ACT.8", "JER.17", "MAR.3"],
["JDG.5", "ACT.9", "JER.18", "MAR.4"],
["JDG.6", "ACT.10", "JER.19", "MAR.5"],
["JDG.7", "ACT.11", "JER.20", "MAR.6"],
["JDG.8", "ACT.12", "JER.21", "MAR.7"],
["JDG.9", "ACT.13", "JER.22", "MAR.8"],
["JDG.10", "ACT.14", "JER.23", "MAR.9"],
["JDG.11", "ACT.15", "JER.24", "MAR.10"],
["JDG.12", "ACT.16", "JER.25", "MAR.11"],
["JDG.13", "ACT.17", "JER.26", "MAR.12"],
["JDG.14", "ACT.18", "JER.27", "MAR.13"],
["JDG.15", "ACT.19", "JER.28", "MAR.14"],
["JDG.16", "ACT.20", "JER.29", "MAR.15"],
["JDG.17", "ACT.21", "JER.30", "JER.31", "MAR.16"],
["JDG.18", "ACT.22", "JER.32", "PSA.1", "PSA.2"],
["JDG.19", "ACT.23", "JER.33", "PSA.3", "PSA.4"],
["JDG.20", "ACT.24", "JER.34", "PSA.5", "PSA.6"],
["JDG.21", "ACT.25", "JER.35", "PSA.7", "PSA.8"],
["RUT.1", "ACT.26", "JER.36", "PSA.9"],
["RUT.2", "ACT.27", "JER.37", "PSA.10"],
["RUT.3", "RUT.4", "ACT.28", "JER.38", "PSA.11", "PSA.12"],
["1SA.1", "ROM.1", "JER.39", "PSA.13", "PSA.14"],
["1SA.2", "ROM.2", "JER.40", "PSA.15", "PSA.16"],
["1SA.3", "ROM.3", "JER.41", "PSA.17"],
["1SA.4", "ROM.4", "JER.42", "PSA.18"],
["1SA.5", "1SA.6", "ROM.5", "JER.43", "PSA.19"],
["1SA.7", "1SA.8", "ROM.6", "JER.44", "JER.45", "PSA.20", "PSA.21"],
["1SA.9", "ROM.7", "JER.46", "PSA.22"],
["1SA.10", "ROM.8", "JER.47", "PSA.23", "PSA.24"],
["1SA.11", "ROM.9", "JER.48", "PSA.25"],
["1SA.12", "ROM.10", "JER.49", "PSA.26", "PSA.27"],
["1SA.13", "ROM.11", "JER.50", "PSA.28", "PSA.29"],
["1SA.14", "ROM.12", "JER.51", "PSA.30"],
["1SA.15", "ROM.13", "JER.52", "PSA.31"],
["1SA.16", "ROM.14", "LAM.1", "PSA.32"],
["1SA.17", "ROM.15", "LAM.2", "PSA.33"],
["1SA.18", "ROM.16", "LAM.3", "PSA.34"],
["1SA.19", "1CO.1", "LAM.4", "PSA.35"],
["1SA.20", "1CO.2", "LAM.5", "PSA.36"],
["1SA.21", "1SA.22", "1CO.3", "EZE.1", "PSA.37"],
["1SA.23", "1CO.4", "EZE.2", "PSA.38"],
["1SA.24", "1CO.5", "EZE.3", "PSA.39"],
["1SA.25", "1CO.6", "EZE.4", "PSA.40", "PSA.41"],
["1SA.26", "1CO.7", "EZE.5", "PSA.42", "PSA.43"],
["1SA.27", "1CO.8", "EZE.6", "PSA.44"],
["1SA.28", "1CO.9", "EZE.7", "PSA.45"],
["1SA.29", "1SA.30", "1CO.10", "EZE.8", "PSA.46", "PSA.47"],
["1SA.31", "1CO.11", "EZE.9", "PSA.48"],
["2SA.1", "1CO.12", "EZE.10", "PSA.49"],
["2SA.2", "1CO.13", "EZE.11", "PSA.50"],
["2SA.3", "1CO.14", "EZE.12", "PSA.51"],
["2SA.4", "2SA.5", "1CO.15", "EZE.13", "PSA.52", "PSA.53", "PSA.54"],
["2SA.6", "1CO.16", "EZE.14", "PSA.55"],
["2SA.7", "2CO.1", "EZE.15", "PSA.56", "PSA.57"],
["2SA.8", "2SA.9", "2CO.2", "EZE.16", "PSA.58", "PSA.59"],
["2SA.10", "2CO.3", "EZE.17", "PSA.60", "PSA.61"],
["2SA.11", "2CO.4", "EZE.18", "PSA.62", "PSA.63"],
["2SA.12", "2CO.5", "EZE.19", "PSA.64", "PSA.65"],
["2SA.13", "2CO.6", "EZE.20", "PSA.66", "PSA.67"],
["2SA.14", "2CO.7", "EZE.21", "PSA.68"],
["2SA.15", "2CO.8", "EZE.22", "PSA.69"],
["2SA.16", "2CO.9", "EZE.23", "PSA.70", "PSA.71"],
["2SA.17", "2CO.10", "EZE.24", "PSA.72"],
["2SA.18", "2CO.11", "EZE.25", "PSA.73"],
["2SA.19", "2CO.12", "EZE.26", "PSA.74"],
["2SA.20", "2CO.13", "EZE.27", "PSA.75", "PSA.76"],
["2SA.21", "GAL.1", "EZE.28", "PSA.77"],
["2SA.22", "GAL.2", "EZE.29", "PSA.78"],
["2SA.23", "GAL.3", "EZE.30", "PSA.79"],
["2SA.24", "GAL.4", "EZE.31", "PSA.80"],
["1KI.1", "GAL.5", "EZE.32", "PSA.81", "PSA.82"],
["1KI.2", "GAL.6", "EZE.33", "PSA.83", "PSA.84"],
["1KI.3", "EPH.1", "EZE.34", "PSA.85"],
["1KI.4", "1KI.5", "EPH.2", "EZE.35", "PSA.86"],
["1KI.6", "EPH.3", "EZE.36", "PSA.87", "PSA.88"],
["1KI.7", "EPH.4", "EZE.37", "PSA.89"],
["1KI.8", "EPH.5", "EZE.38", "PSA.90"],
["1KI.9", "EPH.6", "EZE.39", "PSA.91"],
["1KI.10", "PHP.1", "EZE.40", "PSA.92", "PSA.93"],
["1KI.11", "PHP.2", "EZE.41", "PSA.94"],
["1KI.12", "PHP.3", "EZE.42", "PSA.95", "PSA.96"],
["1KI.13", "PHP.4", "EZE.43", "PSA.97", "PSA.98"],
["1KI.14", "COL.1", "EZE.44", "PSA.99", "PSA.100", "PSA.101"],
["1KI.15", "COL.2", "EZE.45", "PSA.102"],
["1KI.16", "COL.3", "EZE.46", "PSA.103"],
["1KI.17", "COL.4", "EZE.47", "PSA.104"],
["1KI.18", "1TH.1", "EZE.48", "PSA.105"],
["1KI.19", "1TH.2", "DAN.1", "PSA.106"],
["1KI.20", "1TH.3", "DAN.2", "PSA.107"],
["1KI.21", "1TH.4", "DAN.3", "PSA.108", "PSA.109"],
["1KI.22", "1TH.5", "DAN.4", "PSA.110", "PSA.111"],
["2KI.1", "2TH.1", "DAN.5", "PSA.112", "PSA.113"],
["2KI.2", "2TH.2", "DAN.6", "PSA.114", "PSA.115"],
["2KI.3", "2TH.3", "DAN.7", "PSA.116"],
["2KI.4", "1TI.1", "DAN.8", "PSA.117", "PSA.118"],
["2KI.5", "1TI.2", "DAN.9", "PSA.119.1‐24"],
["2KI.6", "1TI.3", "DAN.10", "PSA.119.25‐48"],
["2KI.7", "1TI.4", "DAN.11", "PSA.119.49‐72"],
["2KI.8", "1TI.5", "DAN.12", "PSA.119.73‐96"],
["2KI.9", "1TI.6", "HOS.1", "PSA.119.97‐120"],
["2KI.10", "2KI.11", "2TI.1", "HOS.2", "PSA.119.121‐144"],
["2KI.12", "2TI.2", "HOS.3", "HOS.4", "PSA.119.145‐176"],
["2KI.13", "2TI.3", "HOS.5", "HOS.6", "PSA.120", "PSA.121", "PSA.122"],
["2KI.14", "2TI.4", "HOS.7", "PSA.123", "PSA.124", "PSA.125"],
["2KI.15", "TIT.1", "HOS.8", "PSA.126", "PSA.127", "PSA.128"],
["2KI.16", "TIT.2", "HOS.9", "PSA.129", "PSA.130", "PSA.131"],
["2KI.17", "TIT.3", "HOS.10", "PSA.132", "PSA.133", "PSA.134"],
["2KI.18", "PHM.1", "HOS.11", "PSA.135", "PSA.136"],
["2KI.19", "HEB.1", "HOS.12", "PSA.137", "PSA.138"],
["2KI.20", "HEB.2", "HOS.13", "PSA.139"],
["2KI.21", "HEB.3", "HOS.14", "PSA.140", "PSA.141"],
["2KI.22", "HEB.4", ".JOL.1", "PSA.142"],
["2KI.23", "HEB.5", ".JOL.2", "PSA.143"],
["2KI.24", "HEB.6", ".JOL.3", "PSA.144"],
["2KI.25", "HEB.7", "AMO. 1", "PSA.145"],
["1CH.1", "1CH.2", "HEB.8", "AMO. 2", "PSA.146", "PSA.147"],
["1CH.3", "1CH.4", "HEB.9", "AMO. 3", "PSA.148"],
["1CH.5", "1CH.6", "HEB.10", "AMO. 4", "PSA.149"],
["1CH.7", "1CH.8", "HEB.11", "AMO. 5", "PSA.150"],
["1CH.9", "1CH.10", "HEB.12", "AMO. 6", "LUK.1"],
["1CH.11", "1CH.12", "HEB.13", "AMO. 7", "LUK.2"],
["1CH.13", "1CH.14", "JAM.1", "AMO. 8", "LUK.3"],
["1CH.15", "JAM.2", "AMO. 9", "LUK.4"],
["1CH.16", "JAM.3", "OBA.1", "LUK.5"],
["1CH.17", "JAM.4", "JON.1", "LUK.6"],
["1CH.18", "JAM.5", "JON.2", "LUK.7"],
["1CH.19", "1CH.20", "1PE.1", "JON.3", "LUK.8"],
["1CH.21", "1PE.2", "JON.4", "LUK.9"],
["1CH.22", "1PE.3", "MIC.1", "LUK.10"],
["1CH.23", "1PE.4", "MIC.2", "LUK.11"],
["1CH.24", "1CH.25", "1PE.5", "MIC.3", "LUK.12"],
["1CH.26", "1CH.27", "2PE.1", "MIC.4", "LUK.13"],
["1CH.28", "2PE.2", "MIC.5", "LUK.14"],
["1CH.29", "2PE.3", "MIC.6", "LUK.15"],
["2CH.1", "1JN.1", "MIC.7", "LUK.16"],
["2CH.2", "1JN.2", "NAH.1", "LUK.17"],
["2CH.3", "2CH.4", "1JN.3", "NAH.2", "LUK.18"],
["2CH.5", "1JN.4", "NAH.3", "LUK.19"],
["2CH.6", "1JN.5", "HAB. 1", "LUK.20"],
["2CH.7", "2JN.1", "HAB. 2", "LUK.21"],
["2CH.8", "3JN.1", "HAB. 3", "LUK.22"],
["2CH.9", "JUD.1", "ZEPH.1", "LUK.23"],
["2CH.10", "REV.1", "ZEPH.2", "LUK.24"],
["2CH.11", "2CH.12", "REV.2", "JHN.1"],
["2CH.13", "REV.3", "HAG.1", "JHN.2"],
["2CH.14", "2CH.15", "REV.4", "HAG.2", "JHN.3"],
["2CH.16", "REV.5", "ZEC.1", "JHN.4"],
["2CH.17", "REV.6", "ZEC.2", "JHN.5"],
["2CH.18", "REV.7", "ZEC.3", "JHN.6"],
["2CH.19", "2CH.20", "REV.8", "ZEC.4", "JHN.7"],
["2CH.21", "REV.9", "ZEC.5", "JHN.8"],
["2CH.22", "2CH.23", "REV.10", "ZEC.6", "JHN.9"],
["2CH.24", "REV.11", "ZEC.7", "JHN.10"],
["2CH.25", "REV.12", "ZEC.8", "JHN.11"],
["2CH.26", "REV.13", "ZEC.9", "JHN.12"],
["2CH.27", "2CH.28", "REV.14", "ZEC.10", "JHN.13"],
["2CH.29", "REV.15", "ZEC.11", "JHN.14"],
["2CH.30", "REV.16", "ZEC.12", "JHN.15"],
["2CH.31", "REV.17", "ZEC.13", "JHN.16"],
["2CH.32", "REV.18", "ZEC.14", "JHN.17"],
["2CH.33", "REV.19", "MAL.1", "JHN.18"],
["2CH.34", "REV.20", "MAL.2", "JHN.19"],
["2CH.35", "REV.21", "MAL.3", "JHN.20"],
["2CH.36", "REV.22", "MAL.4", "JHN.21"]
]

/*  OLD PLAN
const mcheynePlan = [
["GEN.1", "MAT.1", "EZR.1", "ACT.1"],
["GEN.2", "MAT.2", "EZR.2", "ACT.2"],
["GEN.3", "MAT.3", "EZR.3", "ACT.3"],
["GEN.4", "MAT.4", "EZR.4", "ACT.4"],
["GEN.5", "MAT.5", "EZR.5", "ACT.5"],
["GEN.6", "MAT.6", "EZR.6", "ACT.6"],
["GEN.7", "MAT.7", "EZR.7", "ACT.7"],
["GEN.8", "MAT.8", "EZR.8", "ACT.8"],
["GEN.9", "GEN.10", "MAT.9", "EZR.9", "ACT.9"],
["GEN.11", "MAT.10", "EZR.10", "ACT.10"],
["GEN.12", "MAT.11", "NEH.1", "ACT.11"],
["GEN.13", "MAT.12", "NEH.2", "ACT.12"],
["GEN.14", "MAT.13", "NEH.3", "ACT.13"],
["GEN.15", "MAT.14", "NEH.4", "ACT.14"],
["GEN.16", "MAT.15", "NEH.5", "ACT.15"],
["GEN.17", "MAT.16", "NEH.6", "ACT.16"],
["GEN.18", "MAT.17", "NEH.7", "ACT.17"],
["GEN.19", "MAT.18", "NEH.8", "ACT.18"],
["GEN.20", "MAT.19", "NEH.9", "ACT.19"],
["GEN.21", "MAT.20", "NEH.10", "ACT.20"],
["GEN.22", "MAT.21", "NEH.11", "ACT.21"],
["GEN.23", "MAT.22", "NEH.12", "ACT.22"],
["GEN.24", "MAT.23", "NEH.13", "ACT.23"],
["GEN.25", "MAT.24", "EST.1", "ACT.24"],
["GEN.26", "MAT.25", "EST.2", "ACT.25"],
["GEN.27", "MAT.26", "EST.3", "ACT.26"],
["GEN.28", "MAT.27", "EST.4", "ACT.27"],
["GEN.29", "MAT.28", "EST.5", "ACT.28"],
["GEN.30", "MAR.1", "EST.6", "ROM.1"],
["GEN.31", "MAR.2", "EST.7", "ROM.2"],
["GEN.32", "MAR.3", "EST.8", "ROM.3"],
["GEN.33", "MAR.4", "EST.9", "EST.10", "ROM.4"],
["GEN.34", "MAR.5", "JOB.1", "ROM.5"],
["GEN.35", "GEN.36", "MAR.6", "JOB.2", "ROM.6"],
["GEN.37", "MAR.7", "JOB.3", "ROM.7"],
["GEN.38", "MAR.8", "JOB.4", "ROM.8"],
["GEN.39", "MAR.9", "JOB.5", "ROM.9"],
["GEN.40", "MAR.10", "JOB.6", "ROM.10"],
["GEN.41", "MAR.11", "JOB.7", "ROM.11"],
["GEN.42", "MAR.12", "JOB.8", "ROM.12"],
["GEN.43", "MAR.13", "JOB.9", "ROM.13"],
["GEN.44", "MAR.14", "JOB.10", "ROM.14"],
["GEN.45", "MAR.15", "JOB.11", "ROM.15"],
["GEN.46", "MAR.16", "JOB.12", "ROM.16"],
["GEN.47", "LUK.1.1‐38", "JOB.13", "1CO.1"],
["GEN.48", "LUK.1.39‐80", "JOB.14", "1CO.2"],
["GEN.49", "LUK.2", "JOB.15", "1CO.3"],
["GEN.50", "LUK.3", "JOB.16", "JOB.17", "1CO.4"],
["EXO.1", "LUK.4", "JOB.18", "1CO.5"],
["EXO.2", "LUK.5", "JOB.19", "1CO.6"],
["EXO.3", "LUK.6", "JOB.20", "1CO.7"],
["EXO.4", "LUK.7", "JOB.21", "1CO.8"],
["EXO.5", "LUK.8", "JOB.22", "1CO.9"],
["EXO.6", "LUK.9", "JOB.23", "1CO.10"],
["EXO.7", "LUK.10", "JOB.24", "1CO.11"],
["EXO.8", "LUK.11", "JOB.25", "JOB.26", "1CO.12"],
["EXO.9", "LUK.12", "JOB.27", "1CO.13"],
["EXO.10", "LUK.13", "JOB.28", "1CO.14"],
["EXO.11", "LUK.14", "JOB.29", "1CO.15"],
["EXO.12", "LUK.15", "JOB.30", "1CO.16"],
["EXO.13", "LUK.16", "JOB.31", "2CO.1"],
["EXO.14", "LUK.17", "JOB.32", "2CO.2"],
["EXO.15", "LUK.18", "JOB.33", "2CO.3"],
["EXO.16", "LUK.19", "JOB.34", "2CO.4"],
["EXO.17", "LUK.20", "JOB.35", "2CO.5"],
["EXO.18", "LUK.21", "JOB.36", "2CO.6"],
["EXO.19", "LUK.22", "JOB.37", "2CO.7"],
["EXO.20", "LUK.23", "JOB.38", "2CO.8"],
["EXO.21", "LUK.24", "JOB.39", "2CO.9"],
["EXO.22", "JHN.1", "JOB.40", "2CO.10"],
["EXO.23", "JHN.2", "JOB.41", "2CO.11"],
["EXO.24", "JHN.3", "JOB.42", "2CO.12"],
["EXO.25", "JHN.4", "PRO.1", "2CO.13"],
["EXO.26", "JHN.5", "PRO.2", "GAL.1"],
["EXO.27", "JHN.6", "PRO.3", "GAL.2"],
["EXO.28", "JHN.7", "PRO.4", "GAL.3"],
["EXO.29", "JHN.8", "PRO.5", "GAL.4"],
["EXO.30", "JHN.9", "PRO.6", "GAL.5"],
["EXO.31", "JHN.10", "PRO.7", "GAL.6"],
["EXO.32", "JHN.11", "PRO.8", "EPH.1"],
["EXO.33", "JHN.12", "PRO.9", "EPH.2"],
["EXO.34", "JHN.13", "PRO.10", "EPH.3"],
["EXO.35", "JHN.14", "PRO.11", "EPH.4"],
["EXO.36", "JHN.15", "PRO.12", "EPH.5"],
["EXO.37", "JHN.16", "PRO.13", "EPH.6"],
["EXO.38", "JHN.17", "PRO.14", "PHP.1"],
["EXO.39", "JHN.18", "PRO.15", "PHP.2"],
["EXO.40", "JHN.19", "PRO.16", "PHP.3"],
["LEV.1", "JHN.20", "PRO.17", "PHP.4"],
["LEV.2", "LEV.3", "JHN.21", "PRO.18", "COL.1"],
["LEV.4", "PSA.1", "PSA.2", "PRO.19", "COL.2"],
["LEV.5", "PSA.3", "PSA.4", "PRO.20", "COL.3"],
["LEV.6", "PSA.5", "PSA.6", "PRO.21", "COL.4"],
["LEV.7", "PSA.7", "PSA.8", "PRO.22", "1TH.1"],
["LEV.8", "PSA.9", "PRO.23", "1TH.2"],
["LEV.9", "PSA.10", "PRO.24", "1TH.3"],
["LEV.10", "PSA.11", "PSA.12", "PRO.25", "1TH.4"],
["LEV.11", "LEV.12", "PSA.13", "PSA.14", "PRO.26", "1TH.5"],
["LEV.13", "PSA.15", "PSA.16", "PRO.27", "2TH.1"],
["LEV.14", "PSA.17", "PRO.28", "2TH.2"],
["LEV.15", "PSA.18", "PRO.29", "2TH.3"],
["LEV.16", "PSA.19", "PRO.30", "1TI.1"],
["LEV.17", "PSA.20", "PSA.21", "PRO.31", "1TI.2"],
["LEV.18", "PSA.22", "ECC.1", "1TI.3"],
["LEV.19", "PSA.23", "PSA.24", "ECC.2", "1TI.4"],
["LEV.20", "PSA.25", "ECC.3", "1TI.5"],
["LEV.21", "PSA.26", "PSA.27", "ECC.4", "1TI.6"],
["LEV.22", "PSA.28", "PSA.29", "ECC.5", "2TI.1"],
["LEV.23", "PSA.30", "ECC.6", "2TI.2"],
["LEV.24", "PSA.31", "ECC.7", "2TI.3"],
["LEV.25", "PSA.32", "ECC.8", "2TI.4"],
["LEV.26", "PSA.33", "ECC.9", "TIT.1"],
["LEV.27", "PSA.34", "ECC.10", "TIT.2"],
["NUM.1", "PSA.35", "ECC.11", "TIT.3"],
["NUM.2", "PSA.36", "ECC.12", "PHM.1"],
["NUM.3", "PSA.37", "SNG.1", "HEB.1"],
["NUM.4", "PSA.38", "SNG.2", "HEB.2"],
["NUM.5", "PSA.39", "SNG.3", "HEB.3"],
["NUM.6", "PSA.40", "PSA.41", "SNG.4", "HEB.4"],
["NUM.7", "PSA.42", "PSA.43", "SNG.5", "HEB.5"],
["NUM.8", "PSA.44", "SNG.6", "HEB.6"],
["NUM.9", "PSA.45", "SNG.7", "HEB.7"],
["NUM.10", "PSA.46", "PSA.47", "SNG.8", "HEB.8"],
["NUM.11", "PSA.48", "ISA.1", "HEB.9"],
["NUM.12", "NUM.13", "PSA.49", "ISA.2", "HEB.10"],
["NUM.14", "PSA.50", "ISA.3", "ISA.4", "HEB.11"],
["NUM.15", "PSA.51", "ISA.5", "HEB.12"],
["NUM.16", "PSA.52", "PSA.53", "PSA.54", "ISA.6", "HEB.13"],
["NUM.17", "NUM.18", "PSA.55", "ISA.7", "JAM.1"],
["NUM.19", "PSA.56", "PSA.57", "ISA.8", "JAM.2"],
["NUM.20", "PSA.58", "PSA.59", "ISA.9", "JAM.3"],
["NUM.21", "PSA.60", "PSA.61", "ISA.10", "JAM.4"],
["NUM.22", "PSA.62", "PSA.63", "ISA.11", "ISA.12", "JAM.5"],
["NUM.23", "PSA.64", "PSA.65", "ISA.13", "1PE.1"],
["NUM.24", "PSA.66", "PSA.67", "ISA.14", "1PE.2"],
["NUM.25", "PSA.68", "ISA.15", "1PE.3"],
["NUM.26", "PSA.69", "ISA.16", "1PE.4"],
["NUM.27", "PSA.70", "PSA.71", "ISA.17", "ISA.18", "1PE.5"],
["NUM.28", "PSA.72", "ISA.19", "ISA.20", "2PE.1"],
["NUM.29", "PSA.73", "ISA.21", "2PE.2"],
["NUM.30", "PSA.74", "ISA.22", "2PE.3"],
["NUM.31", "PSA.75", "PSA.76", "ISA.23", "1JN.1"],
["NUM.32", "PSA.77", "ISA.24", "1JN.2"],
["NUM.33", "PSA.78.1‐39", "ISA.25", "1JN.3"],
["NUM.34", "PSA.78.40‐72", "ISA.26", "1JN.4"],
["NUM.35", "PSA.79", "ISA.27", "1JN.5"],
["NUM.36", "PSA.80", "ISA.28", "2JN.1"],
["DEU.1", "PSA.81", "PSA.82", "ISA.29", "3JN.1"],
["DEU.2", "PSA.83", "PSA.84", "ISA.30", "JUD.1"],
["DEU.3", "PSA.85", "ISA.31", "REV.1"],
["DEU.4", "PSA.86", "PSA.87", "ISA.32", "REV.2"],
["DEU.5", "PSA.88", "ISA.33", "REV.3"],
["DEU.6", "PSA.89", "ISA.34", "REV.4"],
["DEU.7", "PSA.90", "ISA.35", "REV.5"],
["DEU.8", "PSA.91", "ISA.36", "REV.6"],
["DEU.9", "PSA.92", "PSA.93", "ISA.37", "REV.7"],
["DEU.10", "PSA.94", "ISA.38", "REV.8"],
["DEU.11", "PSA.95", "PSA.96", "ISA.39", "REV.9"],
["DEU.12", "PSA.97", "PSA.98", "ISA.40", "REV.10"],
["DEU.13", "DEU.14", "PSA.99", "PSA.100", "PSA.101", "ISA.41", "REV.11"],
["DEU.15", "PSA.102", "ISA.42", "REV.12"],
["DEU.16", "PSA.103", "ISA.43", "REV.13"],
["DEU.17", "PSA.104", "ISA.44", "REV.14"],
["DEU.18", "PSA.105", "ISA.45", "REV.15"],
["DEU.19", "PSA.106", "ISA.46", "REV.16"],
["DEU.20", "PSA.107", "ISA.47", "REV.17"],
["DEU.21", "PSA.108", "PSA.109", "ISA.48", "REV.18"],
["DEU.22", "PSA.110", "PSA.111", "ISA.49", "REV.19"],
["DEU.23", "PSA.112", "PSA.113", "ISA.50", "REV.20"],
["DEU.24", "PSA.114", "PSA.115", "ISA.51", "REV.21"],
["DEU.25", "PSA.116", "ISA.52", "REV.22"],
["DEU.26", "PSA.117", "PSA.118", "ISA.53", "MAT.1"],
["DEU.27", "PSA.119.1‐24", "ISA.54", "MAT.2"],
["DEU.28", "PSA.119.25‐48", "ISA.55", "MAT.3"],
["DEU.29", "PSA.119.49‐72", "ISA.56", "MAT.4"],
["DEU.30", "PSA.119.73‐96", "ISA.57", "MAT.5"],
["DEU.31", "PSA.119.97‐120", "ISA.58", "MAT.6"],
["DEU.32", "PSA.119.121‐144", "ISA.59", "MAT.7"],
["DEU.33", "DEU.34", "PSA.119.145‐176", "ISA.60", "MAT.8"],
["JOS.1", "PSA.120", "PSA.121", "PSA.122", "ISA.61", "MAT.9"],
["JOS.2", "PSA.123", "PSA.124", "PSA.125", "ISA.62", "MAT.10"],
["JOS.3", "PSA.126", "PSA.127", "PSA.128", "ISA.63", "MAT.11"],
["JOS.4", "PSA.129", "PSA.130", "PSA.131", "ISA.64", "MAT.12"],
["JOS.5", "PSA.132", "PSA.133", "PSA.134", "ISA.65", "MAT.13"],
["JOS.6", "PSA.135", "PSA.136", "ISA.66", "MAT.14"],
["JOS.7", "PSA.137", "PSA.138", "JER.1", "MAT.15"],
["JOS.8", "PSA.139", "JER.2", "MAT.16"],
["JOS.9", "PSA.140", "PSA.141", "JER.3", "MAT.17"],
["JOS.10", "PSA.142", "PSA.143", "JER.4", "MAT.18"],
["JOS.11", "PSA.144", "JER.5", "MAT.19"],
["JOS.12", "JOS.13", "PSA.145", "JER.6", "MAT.20"],
["JOS.14", "JOS.15", "PSA.146", "PSA.147", "JER.7", "MAT.21"],
["JOS.16", "JOS.17", "PSA.148", "JER.8", "MAT.22"],
["JOS.18", "JOS.19", "PSA.149", "PSA.150", "JER.9", "MAT.23"],
["JOS.20", "JOS.21", "ACT.1", "JER.10", "MAT.24"],
["JOS.22", "ACT.2", "JER.11", "MAT.25"],
["JOS.23", "ACT.3", "JER.12", "MAT.26"],
["JOS.24", "ACT.4", "JER.13", "MAT.27"],
["JDG.1", "ACT.5", "JER.14", "MAT.28"],
["JDG.2", "ACT.6", "JER.15", "MAR.1"],
["JDG.3", "ACT.7", "JER.16", "MAR.2"],
["JDG.4", "ACT.8", "JER.17", "MAR.3"],
["JDG.5", "ACT.9", "JER.18", "MAR.4"],
["JDG.6", "ACT.10", "JER.19", "MAR.5"],
["JDG.7", "ACT.11", "JER.20", "MAR.6"],
["JDG.8", "ACT.12", "JER.21", "MAR.7"],
["JDG.9", "ACT.13", "JER.22", "MAR.8"],
["JDG.10", "ACT.14", "JER.23", "MAR.9"],
["JDG.11", "ACT.15", "JER.24", "MAR.10"],
["JDG.12", "ACT.16", "JER.25", "MAR.11"],
["JDG.13", "ACT.17", "JER.26", "MAR.12"],
["JDG.14", "ACT.18", "JER.27", "MAR.13"],
["JDG.15", "ACT.19", "JER.28", "MAR.14"],
["JDG.16", "ACT.20", "JER.29", "MAR.15"],
["JDG.17", "ACT.21", "JER.30", "JER.31", "MAR.16"],
["JDG.18", "ACT.22", "JER.32", "LUK.1"],
["JDG.19", "ACT.23", "JER.33", "LUK.2"],
["JDG.20", "ACT.24", "JER.34", "LUK.3"],
["JDG.21", "ACT.25", "JER.35", "LUK.4"],
["RUT.1", "ACT.26", "JER.36", "LUK.5"],
["RUT.2", "ACT.27", "JER.37", "LUK.6"],
["RUT.3", "RUT.4", "ACT.28", "JER.38", "LUK.7"],
["1SA.1", "ROM.1", "JER.39", "LUK.8"],
["1SA.2", "ROM.2", "JER.40", "LUK.9"],
["1SA.3", "ROM.3", "JER.41", "LUK.10"],
["1SA.4", "ROM.4", "JER.42", "LUK.11"],
["1SA.5", "1SA.6", "ROM.5", "JER.43", "LUK.12"],
["1SA.7", "1SA.8", "ROM.6", "JER.44", "JER.45", "LUK.13"],
["1SA.9", "ROM.7", "JER.46", "LUK.14"],
["1SA.10", "ROM.8", "JER.47", "LUK.15"],
["1SA.11", "ROM.9", "JER.48", "LUK.16"],
["1SA.12", "ROM.10", "JER.49", "LUK.17"],
["1SA.13", "ROM.11", "JER.50", "LUK.18"],
["1SA.14", "ROM.12", "JER.51", "LUK.19"],
["1SA.15", "ROM.13", "JER.52", "LUK.20"],
["1SA.16", "ROM.14", "LAM.1", "LUK.21"],
["1SA.17", "ROM.15", "LAM.2", "LUK.22"],
["1SA.18", "ROM.16", "LAM.3", "LUK.23"],
["1SA.19", "1CO.1", "LAM.4", "LUK.24"],
["1SA.20", "1CO.2", "LAM.5", "JHN.1"],
["1SA.21", "1SA.22", "1CO.3", "EZE.1", "JHN.2"],
["1SA.23", "1CO.4", "EZE.2", "JHN.3"],
["1SA.24", "1CO.5", "EZE.3", "JHN.4"],
["1SA.25", "1CO.6", "EZE.4", "JHN.5"],
["1SA.26", "1CO.7", "EZE.5", "JHN.6"],
["1SA.27", "1CO.8", "EZE.6", "JHN.7"],
["1SA.28", "1CO.9", "EZE.7", "JHN.8"],
["1SA.29", "1SA.30", "1CO.10", "EZE.8", "JHN.9"],
["1SA.31", "1CO.11", "EZE.9", "JHN.10"],
["2SA.1", "1CO.12", "EZE.10", "JHN.11"],
["2SA.2", "1CO.13", "EZE.11", "JHN.12"],
["2SA.3", "1CO.14", "EZE.12", "JHN.13"],
["2SA.4", "2SA.5", "1CO.15", "EZE.13", "JHN.14"],
["2SA.6", "1CO.16", "EZE.14", "JHN.15"],
["2SA.7", "2CO.1", "EZE.15", "JHN.16"],
["2SA.8", "2SA.9", "2CO.2", "EZE.16", "JHN.17"],
["2SA.10", "2CO.3", "EZE.17", "JHN.18"],
["2SA.11", "2CO.4", "EZE.18", "JHN.19"],
["2SA.12", "2CO.5", "EZE.19", "JHN.20"],
["2SA.13", "2CO.6", "EZE.20", "JHN.21"],
["2SA.14", "2CO.7", "EZE.21", "PSA.1", "PSA.2"],
["2SA.15", "2CO.8", "EZE.22", "PSA.3", "PSA.4"],
["2SA.16", "2CO.9", "EZE.23", "PSA.5", "PSA.6"],
["2SA.17", "2CO.10", "EZE.24", "PSA.7", "PSA.8"],
["2SA.18", "2CO.11", "EZE.25", "PSA.9"],
["2SA.19", "2CO.12", "EZE.26", "PSA.10"],
["2SA.20", "2CO.13", "EZE.27", "PSA.11", "PSA.12"],
["2SA.21", "GAL.1", "EZE.28", "PSA.13", "PSA.14"],
["2SA.22", "GAL.2", "EZE.29", "PSA.15", "PSA.16"],
["2SA.23", "GAL.3", "EZE.30", "PSA.17"],
["2SA.24", "GAL.4", "EZE.31", "PSA.18"],
["1KI.1", "GAL.5", "EZE.32", "PSA.19"],
["1KI.2", "GAL.6", "EZE.33", "PSA.20", "PSA.21"],
["1KI.3", "EPH.1", "EZE.34", "PSA.22"],
["1KI.4", "1KI.5", "EPH.2", "EZE.35", "PSA.23", "PSA.24"],
["1KI.6", "EPH.3", "EZE.36", "PSA.25"],
["1KI.7", "EPH.4", "EZE.37", "PSA.26", "PSA.27"],
["1KI.8", "EPH.5", "EZE.38", "PSA.28", "PSA.29"],
["1KI.9", "EPH.6", "EZE.39", "PSA.30"],
["1KI.10", "PHP.1", "EZE.40", "PSA.31"],
["1KI.11", "PHP.2", "EZE.41", "PSA.32"],
["1KI.12", "PHP.3", "EZE.42", "PSA.33"],
["1KI.13", "PHP.4", "EZE.43", "PSA.34"],
["1KI.14", "COL.1", "EZE.44", "PSA.35"],
["1KI.15", "COL.2", "EZE.45", "PSA.36"],
["1KI.16", "COL.3", "EZE.46", "PSA.37"],
["1KI.17", "COL.4", "EZE.47", "PSA.38"],
["1KI.18", "1TH.1", "EZE.48", "PSA.39"],
["1KI.19", "1TH.2", "DAN.1", "PSA.40", "PSA.41"],
["1KI.20", "1TH.3", "DAN.2", "PSA.42", "PSA.43"],
["1KI.21", "1TH.4", "DAN.3", "PSA.44"],
["1KI.22", "1TH.5", "DAN.4", "PSA.45"],
["2KI.1", "2TH.1", "DAN.5", "PSA.46", "PSA.47"],
["2KI.2", "2TH.2", "DAN.6", "PSA.48"],
["2KI.3", "2TH.3", "DAN.7", "PSA.49"],
["2KI.4", "1TI.1", "DAN.8", "PSA.50"],
["2KI.5", "1TI.2", "DAN.9", "PSA.51"],
["2KI.6", "1TI.3", "DAN.10", "PSA.52", "PSA.53", "PSA.54"],
["2KI.7", "1TI.4", "DAN.11", "PSA.55"],
["2KI.8", "1TI.5", "DAN.12", "PSA.56", "PSA.57"],
["2KI.9", "1TI.6", "HOS.1", "PSA.58", "PSA.59"],
["2KI.10", "2KI.11", "2TI.1", "HOS.2", "PSA.60", "PSA.61"],
["2KI.12", "2TI.2", "HOS.3", "HOS.4", "PSA.62", "PSA.63"],
["2KI.13", "2TI.3", "HOS.5", "HOS.6", "PSA.64", "PSA.65"],
["2KI.14", "2TI.4", "HOS.7", "PSA.66", "PSA.67"],
["2KI.15", "TIT.1", "HOS.8", "PSA.68"],
["2KI.16", "TIT.2", "HOS.9", "PSA.69"],
["2KI.17", "TIT.3", "HOS.10", "PSA.70", "PSA.71"],
["2KI.18", "PHM.1", "HOS.11", "PSA.72"],
["2KI.19", "HEB.1", "HOS.12", "PSA.73"],
["2KI.20", "HEB.2", "HOS.13", "PSA.74"],
["2KI.21", "HEB.3", "HOS.14", "PSA.75", "PSA.76"],
["2KI.22", "HEB.4", ".JOL.1", "PSA.77"],
["2KI.23", "HEB.5", ".JOL.2", "PSA.78"],
["2KI.24", "HEB.6", ".JOL.3", "PSA.79"],
["2KI.25", "HEB.7", "AMO. 1", "PSA.80"],
["1CH.1", "1CH.2", "HEB.8", "AMO. 2", "PSA.81", "PSA.82"],
["1CH.3", "1CH.4", "HEB.9", "AMO. 3", "PSA.83", "PSA.84"],
["1CH.5", "1CH.6", "HEB.10", "AMO. 4", "PSA.85"],
["1CH.7", "1CH.8", "HEB.11", "AMO. 5", "PSA.86"],
["1CH.9", "1CH.10", "HEB.12", "AMO. 6", "PSA.87", "PSA.88"],
["1CH.11", "1CH.12", "HEB.13", "AMO. 7", "PSA.89"],
["1CH.13", "1CH.14", "JAM.1", "AMO. 8", "PSA.90"],
["1CH.15", "JAM.2", "AMO. 9", "PSA.91"],
["1CH.16", "JAM.3", "OBA.1", "PSA.92", "PSA.93"],
["1CH.17", "JAM.4", "JON.1", "PSA.94"],
["1CH.18", "JAM.5", "JON.2", "PSA.95", "PSA.96"],
["1CH.19", "1CH.20", "1PE.1", "JON.3", "PSA.97", "PSA.98"],
["1CH.21", "1PE.2", "JON.4", "PSA.99", "PSA.100", "PSA.101"],
["1CH.22", "1PE.3", "MIC.1", "PSA.102"],
["1CH.23", "1PE.4", "MIC.2", "PSA.103"],
["1CH.24", "1CH.25", "1PE.5", "MIC.3", "PSA.104"],
["1CH.26", "1CH.27", "2PE.1", "MIC.4", "PSA.105"],
["1CH.28", "2PE.2", "MIC.5", "PSA.106"],
["1CH.29", "2PE.3", "MIC.6", "PSA.107"],
["2CH.1", "1JN.1", "MIC.7", "PSA.108", "PSA.109"],
["2CH.2", "1JN.2", "NAH.1", "PSA.110", "PSA.111"],
["2CH.3", "2CH.4", "1JN.3", "NAH.2", "PSA.112", "PSA.113"],
["2CH.5", "1JN.4", "NAH.3", "PSA.114", "PSA.115"],
["2CH.6", "1JN.5", "HAB. 1", "PSA.116"],
["2CH.7", "2JN.1", "HAB. 2", "PSA.117", "PSA.118"],
["2CH.8", "3JN.1", "HAB. 3", "PSA.119.1‐24"],
["2CH.9", "JUD.1", "ZEPH.1", "PSA.119.25‐48"],
["2CH.10", "REV.1", "ZEPH.2", "PSA.119.49‐72"],
["2CH.11", "2CH.12", "REV.2", "ZEPH.3", "PSA.119.73‐96"],
["2CH.13", "REV.3", "HAG.1", "PSA.119.97‐120"],
["2CH.14", "2CH.15", "REV.4", "HAG.2", "PSA.119.121‐144"],
["2CH.16", "REV.5", "ZEC.1", "PSA.119.145‐176"],
["2CH.17", "REV.6", "ZEC.2", "PSA.120", "PSA.121", "PSA.122"],
["2CH.18", "REV.7", "ZEC.3", "PSA.123", "PSA.124", "PSA.125"],
["2CH.19", "2CH.20", "REV.8", "ZEC.4", "PSA.126", "PSA.127", "PSA.128"],
["2CH.21", "REV.9", "ZEC.5", "PSA.129", "PSA.130", "PSA.131"],
["2CH.22", "2CH.23", "REV.10", "ZEC.6", "PSA.132", "PSA.133", "PSA.134"],
["2CH.24", "REV.11", "ZEC.7", "PSA.135", "PSA.136"],
["2CH.25", "REV.12", "ZEC.8", "PSA.137", "PSA.138"],
["2CH.26", "REV.13", "ZEC.9", "PSA.139"],
["2CH.27", "2CH.28", "REV.14", "ZEC.10", "PSA.140", "PSA.141"],
["2CH.29", "REV.15", "ZEC.11", "PSA.142"],
["2CH.30", "REV.16", "ZEC.12", "PSA.143"],
["2CH.31", "REV.17", "ZEC.13", "PSA.144"],
["2CH.32", "REV.18", "ZEC.14", "PSA.145"],
["2CH.33", "REV.19", "MAL.1", "PSA.146", "PSA.147"],
["2CH.34", "REV.20", "MAL.2", "PSA.148"],
["2CH.35", "REV.21", "MAL.3", "PSA.149"],
["2CH.36", "REV.22", "MAL.4", "PSA.150"]]
*/


const today_passages = mcheynePlan[day_number - 1]

// Bible versions and their descriptions
const bible_versions = [
    { id: 102, name: "Norsk Bibel: Bibelen den Hellige Skrift, 1988" },
    { id: 2216, name: "Hermon: Bibelen Guds Ord, 1997/2017" },
    { id: 29, name: "Bibelselskapet: Bibelen 2011" }
];

// Get the readings for the given day_number (adjust for 0-based indexing)
const readings = mcheynePlan[day_number - 1]; // Subtract 1 because array indices start at 0

// Base URL for Bible passages
const baseUrl = "https://www.bible.com/bible/";

// Generate links
if (readings) {
    const linksContainer = document.createElement("div"); // Container for the links

    bible_versions.forEach((version) => {
        const versionHeader = document.createElement("h3");
        versionHeader.textContent = version.name; // Display the Bible version name
        linksContainer.appendChild(versionHeader);

        readings.forEach((passage) => {
            const link = document.createElement("a"); // Create a link element
            link.href = `${baseUrl}${version.id}/${encodeURIComponent(passage)}`; // Construct the URL
            link.textContent = passage; // Set the display text
            //link.target = "_blank"; // Open in a new tab 
            link.style.display = "inline"; // block = each link on a new line, no idea what grid does
            link.style.marginRight = "10px"; // Add space between links
            linksContainer.appendChild(link); // Add the link to the container
        });
    });

    // Add the links container to the document body (or another element)
    document.body.appendChild(linksContainer);
} else {
    console.error("No readings found for this day.");
}

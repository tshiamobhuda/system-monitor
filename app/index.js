import document from "document";
import { memory } from "system";

let nativeMemoryPie = document.getElementById("nativeMemoryPie");
let nativeMemoryPiePercentage = document.getElementById("nativeMemoryPiePercentage");
let nativeMemoryPieText = document.getElementById("nativeMemoryPieText");

//Calculate native memory usage
let memUsedKB = memory.native.used/1000;
let memTotalKB = memory.native.total/1000;
let ratioUsage = memUsedKB/memTotalKB;
let percentageUsage = ratioUsage * 100;
let sweepAngle = ratioUsage * 360;

nativeMemoryPie.sweepAngle = parseInt(sweepAngle.toFixed(2));
nativeMemoryPiePercentage.text = `${percentageUsage.toFixed(2)}%`;
nativeMemoryPieText.text = `${memUsedKB.toFixed(2)} / ${memTotalKB.toFixed(2)} KB`;

//Show results
console.log(memUsedKB, memTotalKB, memUsedKB.toFixed(2), memTotalKB.toFixed(2), percentageUsage.toFixed(2), sweepAngle.toFixed(2));
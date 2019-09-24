import document from "document";
import { memory } from "system";

let nativeMemoryPie = document.getElementById("nativeMemoryPie");
let nativeMemoryPiePercentage = document.getElementById("nativeMemoryPiePercentage");
let nativeMemoryUsedText = document.getElementById("nativeMemoryUsedText");
let nativeMemoryTotalText = document.getElementById("nativeMemoryTotalText");

//Calculate native memory usage
let memUsedKB = memory.native.used/1000;
let memTotalKB = memory.native.total/1000;
let ratioUsage = memUsedKB/memTotalKB;
let percentageUsage = ratioUsage * 100;
let sweepAngle = ratioUsage * 360;

nativeMemoryPie.sweepAngle = parseInt(sweepAngle.toFixed(2));
nativeMemoryPiePercentage.text = `${percentageUsage.toFixed(2)}%`;
nativeMemoryUsedText.text = `${memUsedKB.toFixed(2)} KB`;
nativeMemoryTotalText.text = `${memTotalKB.toFixed(2)} KB`;

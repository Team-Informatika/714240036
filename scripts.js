import {renderHTML} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js";
import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js";

getJSON(
  "https://t.if.co.id/json/badrul.json",
  "badrul",
  "boyz",
  responseFunction
);

function responseFunction(response) {
  console.log("HTTP Status:", response.status);
  console.log("Response Data:", response.data);
}


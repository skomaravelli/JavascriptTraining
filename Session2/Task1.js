//http://www.codewars.com/kata/calculating-with-functions


function zero(num){
  if(!num)
{
return 0;
}
else{
return num(0);
}
}
function one(num) {
  if(!num)
{
return 1;
}
else{
return num(1);
}
}
function two(num) {
  if(!num)
{
return 2;
}
else{
return num(2);
}
}
function three(num) {
  if(!num)
{
return 3;
}
else{
return num(3);
}
}
function four(num) {
  if(!num)
{
return 4;
}
else{
return num(4);
}
}
function five(num){
if(!num)
{
return 5;
}
else{
return num(5);
}
}
function six(num) {
  if(!num)
{
return 6;
}
else{
return num(6);
}
}
function seven(num) {
 if(!num)
{
return 7;
}
else{
return num(7);
}
}
function eight(num) {
  if(!num)
{
return 8;
}
else{
return num(8);
}
}
function nine(num) {
  if(!num)
{
return 9;
}
else{
return num(9);
}
}

function plus(value){
 return function(value1){
  return value1 + value;
 }
}
function minus(value) {
 return function(value1){
  return value1 - value;
 }
 }
function times(value) {
 return function(value1){
  return value1 * value;
 }
}
function dividedBy(value) {
 return function(value1){
  return value1 / value;
 }
}


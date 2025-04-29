/*  
What is the Big O notation for Function sortProductsByPrice of the Question 4. Explain your reason.
Answer:

- Big O ของฟังก์ชัน sortProductsByPrice คือ O(n²)
- ฟังก์ชันนี้ใช้ Bubble Sort ซึ่งมีการใช้ลูปซ้อน 2 ชั้นในการเปรียบเทียบและสลับตำแหน่งของข้อมูลใน array
ทำให้จำนวนรอบในการทำงานเพิ่มขึ้นเป็น กำลังสองของจำนวนข้อมูล (n × n)
ดังนั้นในกรณีที่ข้อมูลมีจำนวนมาก เวลาในการทำงานจะเพิ่มขึ้นเป็น O(n²)

*/

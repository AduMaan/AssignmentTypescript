"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guest_Names = ["Haris", "Abdullah", "Ali"];
guest_Names.map((namesInvites) => {
    console.log(`Hey ${namesInvites}, do come to dinner.`);
});
console.log("Abdullah can't come");
guest_Names = ["Haris", "Asad", "Ali"];
guest_Names.map((namesInvites) => {
    console.log(`Hey ${namesInvites}, do come to dinner.`);
});
console.log("I just found bigger table, means more people to have fun.");
guest_Names.unshift("Qasim");
guest_Names.splice(2, 0, "Jawaid");
guest_Names = guest_Names.concat("Usman");
guest_Names.map((namesInvites) => {
    console.log(`Hey ${namesInvites}, do come to dinner.`);
});
//# sourceMappingURL=task16.js.map
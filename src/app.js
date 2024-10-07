let pronoun = ["the", "our"];
let adj = ["great", "big", "last"];
let noun = ["jogger", "racoon", "ofus", "focus"];
let extensions = [".com", ".net", ".us", ".io", ".on"];

for (let pronombre of pronoun) {
  for (let adjetivo of adj) {
    for (let sustantivo of noun) {
      for (let extension of extensions) {
        console.log(pronombre + adjetivo + sustantivo + extension);

        if (sustantivo.endsWith(extension.slice(1))) {
          let hack =
            pronombre +
            adjetivo +
            sustantivo.slice(0, -extension.length + 1) +
            extension;
          console.log(hack);
        }
      }
    }
  }
}

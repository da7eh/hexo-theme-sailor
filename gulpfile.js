import { task, src, dest } from "gulp";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";

task("sass", function () {
  return src("./source/scss/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(autoprefixer())
    .pipe(dest("./source/css"));
});

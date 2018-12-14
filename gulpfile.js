const gulp = require("gulp");

gulp.task("html",()=>{
    return gulp.src("./src/pages/*.html")
    .pipe(gulp.dest("./dist/html/"))
})

gulp.task("javascript",()=>{
    return gulp.src("./src/js/*.js")
    .pipe(gulp.dest("./dist/javascript/"))
})

gulp.task("css",()=>{
    return gulp.src(["./src/css/*.css"])
    .pipe(gulp.dest("./dist/css/"))
})

gulp.task("images",()=>{
    return gulp.src(["./src/images/*.jpg"])
    .pipe(gulp.dest("./dist/images/"))
})

gulp.task("watch",()=>{
    gulp.watch("./src/pages/*.html",["html"])
})
class FileListPlugin {
    apply(compiler){
        compiler.hooks.emit.tapAsync('FileListPlugin', (compilation, callback)=>{
            var filelist = 'In this build:\n\n';

            // 遍历所有编译过的资源文件，
            // 对于每个文件名称，都添加一行内容。
            for (var filename in compilation.assets) {
                filelist += '- ' + filename + '\n';
            }

            // 将这个列表作为一个新的文件资源，插入到 webpack 构建中：
            compilation.assets['filelist.md'] = {
                source: function() {
                    return filelist;
                },
                size: function() {
                    return filelist.length;
                }
            };

            callback();
        })
    }
}

module.exports = FileListPlugin

module.exports = function towelSort(matrix) {
    if (matrix == null){
        return []
    }
        let list = []  
        for (let i = 0; i < matrix.length; i++){
            if (i % 2 !== 0){
                for (let j = matrix[i].length - 1; j >= 0; j-=1){
                    list.push(matrix[i][j])
                }
            }
            else {
                for (let j = 0; j < matrix[i].length; j++ ){
                    list.push(matrix[i][j])
                }
            }
        }
            
        return list
        }

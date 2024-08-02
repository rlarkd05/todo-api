import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema(
    //첫번째 파라미터
    {
        title: {
            type: String,
            required: true,
            //title이 꼭 있을 수 있게 required 사용
            maxLength: 30,
        },
        description: {
            type: String,
        },
        isComplete: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    //두번째 파라미터
    {
        timestamps: true,
        //timestamps: true 이게 createdAt, updatedAt 자동관리
        //따라서 굳이 두개 쓸 필요 없다.
    },
);

const Task = mongoose.model('Task', TaskSchema);
//mongoose.model의 첫번째 아규먼트는 단수로 쓰고 첫글자는 대문자.
export default Task;
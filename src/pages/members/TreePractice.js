import { Tree, AnimatedTree } from 'react-tree-graph';


function TreePractice() {




    const data = {
        name: '대표 남윤진',
        children: [
            {
                name: '개발팀',
                children: [
                    { name: '팀1', children:[
                            {name: '이후영'},
                            {name: '나몰빼미'}


                    ] },

                    { name: '팀2' },

                    { name: '팀3' },
                ],
            },
            {
                name: '인사팀',
                children: [
                    { name: '팀4' },
                    { name: '팀5' },
                ],
            },
            {
                name: '기획팀',
                children: [
                    { name: '팀6' },
                    { name: '팀7' },
                ],
            },
            {
                name: '회계팀',
                children: [
                    { name: '팀8' },
                    { name: '팀9' },
                ],
            },
            {
                name: '법무팀',
                children: [
                    { name: '팀10' },
                    { name: '팀11' },
                ],
            },
        ],
    };


    return (


        <div>



            <main id="main">
                <br></br>
                <h2>조직도</h2>


                <AnimatedTree
                    data={data}
                    height={400}
                    width={400} />

            </main>
        </div>




    );

}

export default TreePractice;
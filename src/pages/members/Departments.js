import { callDepartmentsAPI, callAllDepartmentsAPI } from "../../apis/MemberAPICalls";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Table, ToggleButtonGroup } from "react-bootstrap";
import { Radio, ToggleButton } from "@mui/material";
import ButtonGroup from "../../components/contents/ButtonGroup";




function Departments() {
    const dispatch = useDispatch();
    const departmentsList = useSelector(state => state.departmentReducer);

    const [isEditMode, setIsEditMode] = useState(false);
    const [newDepartment, setNewDepartment] = useState({

        number: '15',
        status: 'Y'

    });


    useEffect(
        () => {
            dispatch(callAllDepartmentsAPI());
        }, []

    );

    const cancelEdit = () => {
        setIsEditMode(false);
        dispatch(callAllDepartmentsAPI());
    }

    const handleEditModeToggle = () => {
        setIsEditMode(prevState => !prevState);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewDepartment(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const addDepartment = async () => {
        // await dispatch(callAddDepartment(newDepartment));
        setIsEditMode(false);
        await dispatch(callAllDepartmentsAPI());
    }

   

    return (
        <>
            <main id="main">
                <div >
                    <br></br>
                    <h2>부서관리</h2>
                    <ButtonGroup buttons={[{ label: '등록', styleClass: 'move', onClick: handleEditModeToggle }]} />
                    <Table>
                        <thead>
                            <tr>
                                <th>미사용</th>
                                <th>사용</th>
                                <th>부서번호</th>
                                <th>부서명</th>
                                <th>팀장</th>
                                <th>부서수정</th>
                                <th>부서삭제</th>

                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(departmentsList) && departmentsList?.map((department) => (
                                <tr key={department.depNo} >
                                    <td>
                                        <Radio
                                            checked={department.status === 'N'}
                                        />
                                    </td>
                                    <td>
                                        <Radio
                                            checked={department.status === 'Y'}
                                        />
                                    </td>
                                    <td>{department.depNo}</td>
                                    <td>{department.depName}</td>
                                    <td>{department.leader}</td>
                                    <td><button>수정</button></td>
                                    <td><button>삭제</button></td>
                                </tr>
                            ))}
                          
                        </tbody>

                    </Table>
                    {isEditMode &&
                                <div>
                                    <input style={{ marginLeft: 400 }} type="text" name="depName" placeholder="부서명을 입력해주세요" onChange={handleInputChange} />
                                    <input style={{ marginLeft: 200 }} type="text" name="leader" placeholder="팀장을 입력해주세요" onChange={handleInputChange} />
                                    <button style={{ marginLeft: 55 }} onClick={cancelEdit}>취소</button>
                                    <button style={{ marginLeft: 55 }} onClick={addDepartment}>추가</button>
                                </div>
                            }

                </div>
            </main>
        </>
    );
}

export default Departments;
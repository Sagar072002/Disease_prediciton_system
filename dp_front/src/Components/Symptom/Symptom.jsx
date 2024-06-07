import React, { useContext, useState, useEffect } from 'react';
import './Symptom.css';
import BookData from '../Search/Data.json';
import { headdata, eyesData, earData , noseData, mouthData,faceData, skinData, hairData, neckData, shoulderData, chestData, heartData, liverData, fingerData, armData, elbowData, handData, pelvicData, abdomenData, kidneyData, backData, hipsData, thighData, kneeData, legData,feetData, otherData } from '../Search/SymptomData.json';
import SearchBar from '../Search/SearchBar.jsx'
import { FaTimes } from 'react-icons/fa';
import PredictionService from "../../services/prediction_service.jsx"
import { SiteContext } from '../../context/siteContext';
import { saveUserState } from '../../services/user_service';
import makeSymList from './makeSymList.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Symptom = () => {
  const [selectedIndices, setSelectedIndices] = useState([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [selectedSymptomsVal, setSelectedSymptomsVal] = useState([]);
  const { userState, setUserState } = useContext(SiteContext);
  const [result, setResult] = useState({});
  const [headClick, setHeadClick] = useState(false);
  const [eyeClick, seteyeClick] = useState(false);
  const [earClick, setearClick] = useState(false);


const [selectedItems, setSelectedItems] = useState([]);

const handleSymptomSelect = (selectedSymptom, symVal) => {
  if (!selectedSymptoms.includes(selectedSymptom)) {
    setSelectedSymptoms([...selectedSymptoms, selectedSymptom]);
    setSelectedSymptomsVal([...selectedSymptomsVal, symVal]);
    toast.success("Symptom  added to the list.", {
      position: toast.POSITION.TOP_CENTER
    });
  } else {
    toast.warn('This symptom is already selected.', {
      position: toast.POSITION.TOP_CENTER
    });
  }

};

const handleSymptomsSelect = (selectedSymptom, symVal) => {
  if (!selectedSymptoms.includes(selectedSymptom)) {
    setSelectedSymptoms([...selectedSymptoms, ...selectedSymptom]);
    setSelectedSymptomsVal([...selectedSymptomsVal, ...symVal]);
    toast.success("Symptom  added to the list.", {
      position: toast.POSITION.TOP_CENTER
    });
  } else {
    toast.warn('This symptom is already selected.', {
      position: toast.POSITION.TOP_CENTER
    });
  }

};

const setSelecteditems = (selectedSymptoms)=>{
  let symVal = []
  for (let i of selectedSymptoms){
    let Index = BookData.findIndex( 
      (temp) => temp["title"] === i 
    )
    symVal = [...symVal, BookData[Index].name]
  }
  handleSymptomsSelect(selectedSymptoms,symVal)
}


const handleSendHeadItems = () => {
  const selectedHeadItems = selectedIndices.map(index => headdata[index].title);
  const uniqueHeadItems = selectedHeadItems.filter(item => !selectedItems.includes(item)&&!selectedSymptoms.includes(item));

  if (uniqueHeadItems.length > 0) {
    setSelectedItems(prevItems => [...prevItems, ...uniqueHeadItems]);
    setSelecteditems(uniqueHeadItems)
    setHeadClick(false);
    setSelectedIndices([]);
    toast.success("Symptom added successfully.", {
      position: toast.POSITION.TOP_CENTER
    });
  } else {
    toast.error("Symptom already exists.", {
      position: toast.POSITION.TOP_CENTER
    });
    setHeadClick(false);
    setSelectedIndices([]);
  }
};

const handleSendEyeItems = () => {
  const selectedEyeItems = selectedIndices.map(index => {
    const eyeDataItem = eyesData.find((_, dataIndex) => dataIndex === index);
    return eyeDataItem ? eyeDataItem.title : null;
  });

  const uniqueEyeItems = selectedEyeItems.filter(item => item && !selectedItems.includes(item)&&!selectedSymptoms.includes(item));

  if (uniqueEyeItems.length > 0) {
    setSelectedItems(prevItems => [...prevItems, ...uniqueEyeItems]);
    setSelecteditems(uniqueEyeItems)
    seteyeClick(false);
    setSelectedIndices([]);
    toast.success("Symptom added successfully.", {
      position: toast.POSITION.TOP_CENTER
    });
  } else {
    toast.error("Symptom already exists.", {
      position: toast.POSITION.TOP_CENTER
    });
    seteyeClick(false);
    setSelectedIndices([]);
  }
};

const handleSendEarItems = () => {
  const selectedEarItems = selectedIndices.map(index => {
    const earDataItem = earData.find((_, dataIndex) => dataIndex === index);
    return earDataItem ? earDataItem.title : null;
  });

  const uniqueearItems = selectedEarItems.filter(item => item && !selectedItems.includes(item)&&!selectedSymptoms.includes(item));

  if (uniqueearItems.length > 0) {
    setSelectedItems(prevItems => [...prevItems, ...uniqueearItems]);
    setSelecteditems(uniqueearItems)
    setearClick(false);
    setSelectedIndices([]);
    toast.success("Symptom added successfully.", {
      position: toast.POSITION.TOP_CENTER
    });
  } else {
    toast.error("Symptom already exists.", {
      position: toast.POSITION.TOP_CENTER
    });
    setearClick(false);
    setSelectedIndices([]);
  }
};

const handleSendnoseItems = () => {
  const selectednoseItems = selectedIndices.map(index => {
    const noseDataItem = noseData.find((_, dataIndex) => dataIndex === index);
    return noseDataItem ? noseDataItem.title : null;
  });

  const uniquenoseItems = selectednoseItems.filter(item => item && !selectedItems.includes(item)&&!selectedSymptoms.includes(item));

  if (uniquenoseItems.length > 0) {
    setSelectedItems(prevItems => [...prevItems, ...uniquenoseItems]);
    setSelecteditems(uniquenoseItems)
    setNoseClick(false);
    setSelectedIndices([]);
    toast.success("Symptom added successfully.", {
      position: toast.POSITION.TOP_CENTER
    });
  } else {
    toast.error("Symptom already exists.", {
      position: toast.POSITION.TOP_CENTER
    });
    setNoseClick(false);
    setSelectedIndices([]);
  }
};

const handleSendmouthItems = () => {
  const selectedmouthItems = selectedIndices.map(index => {
    const mouthDataItem = mouthData.find((_, dataIndex) => dataIndex === index);
    return mouthDataItem ? mouthDataItem.title : null;
  });

  const uniquemouthItems = selectedmouthItems.filter(item => item && !selectedItems.includes(item)&&!selectedSymptoms.includes(item));

  if (uniquemouthItems.length > 0) {
    setSelectedItems(prevItems => [...prevItems, ...uniquemouthItems]);
    setSelecteditems(uniquemouthItems)
    setMouthClick(false);
    setSelectedIndices([]);
    toast.success("Symptom added successfully.", {
      position: toast.POSITION.TOP_CENTER
    });
  } else {
    toast.error("Symptom already exists.", {
      position: toast.POSITION.TOP_CENTER
    });
    setMouthClick(false);
    setSelectedIndices([]);
  }
};

const handleSendfaceItems = () => {
  const selectedfaceItems = selectedIndices.map(index => {
    const faceDataItem = faceData.find((_, dataIndex) => dataIndex === index);
    return faceDataItem ? faceDataItem.title : null;
  });

  const uniquefaceItems = selectedfaceItems.filter(item => item && !selectedItems.includes(item)&&!selectedSymptoms.includes(item));

  if (uniquefaceItems.length > 0) {
    setSelectedItems(prevItems => [...prevItems, ...uniquefaceItems]);
    setSelecteditems(uniquefaceItems)
    setFaceClick(false);
    setSelectedIndices([]);
    toast.success("Symptom added successfully.", {
      position: toast.POSITION.TOP_CENTER
    });
  } else {
    toast.error("Symptom already exists.", {
      position: toast.POSITION.TOP_CENTER
    });
    setFaceClick(false);
    setSelectedIndices([]);
  }
};

const handleSendskinItems = () => {
  const selectedskinItems = selectedIndices.map(index => {
    const skinDataItem = skinData.find((_, dataIndex) => dataIndex === index);
    return skinDataItem ? skinDataItem.title : null;
  });

  const uniqueskinItems = selectedskinItems.filter(item => item && !selectedItems.includes(item)&&!selectedSymptoms.includes(item));

  if (uniqueskinItems.length > 0) {
    setSelectedItems(prevItems => [...prevItems, ...uniqueskinItems]);
    setSelecteditems(uniqueskinItems)
    setSkinClick(false);
    setSelectedIndices([]);
    toast.success("Symptom added successfully.", {
      position: toast.POSITION.TOP_CENTER
    });
  } else {
    toast.error("Symptom already exists.", {
      position: toast.POSITION.TOP_CENTER
    });
    setSkinClick(false);
    setSelectedIndices([]);
  }
};

const handleSendhairItems = () => {
  const selectedhairItems = selectedIndices.map(index => {
    const hairDataItem = hairData.find((_, dataIndex) => dataIndex === index);
    return hairDataItem ? hairDataItem.title : null;
  });

  const uniquehairItems = selectedhairItems.filter(item => item && !selectedItems.includes(item)&&!selectedSymptoms.includes(item));

  if (uniquehairItems.length > 0) {
    setSelectedItems(prevItems => [...prevItems, ...uniquehairItems]);
    setSelecteditems(uniquehairItems)
    setHairClick(false);
    setSelectedIndices([]);
    toast.success("Symptom added successfully.", {
      position: toast.POSITION.TOP_CENTER
    });
  } else {
    toast.error("Symptom already exists.", {
      position: toast.POSITION.TOP_CENTER
    });
    setHairClick(false);
    setSelectedIndices([]);
  }
};

const handleSendneckItems = () => {
  const selectedneckItems = selectedIndices.map(index => {
    const neckDataItem = neckData.find((_, dataIndex) => dataIndex === index);
    return neckDataItem ? neckDataItem.title : null;
  });

  const uniqueneckItems = selectedneckItems.filter(item => item && !selectedItems.includes(item)&&!selectedSymptoms.includes(item));

  if (uniqueneckItems.length > 0) {
    setSelectedItems(prevItems => [...prevItems, ...uniqueneckItems]);
    setSelecteditems(uniqueneckItems)
    setNeckClick(false);
    setSelectedIndices([]);
    toast.success("Symptom added successfully.", {
      position: toast.POSITION.TOP_CENTER
    });
  } else {
    toast.error("Symptom already exists.", {
      position: toast.POSITION.TOP_CENTER
    });
    setNeckClick(false);
    setSelectedIndices([]);
  }
};





const handleSendshoulderItems = () => {
  const selectedshoulderItems = selectedIndices.map(index => {
    const shoulderDataItem = shoulderData.find((_, dataIndex) => dataIndex === index);
    return shoulderDataItem ? shoulderDataItem.title : null;
  });

  const uniqueshoulderItems = selectedshoulderItems.filter(item => item && !selectedItems.includes(item)&&!selectedSymptoms.includes(item));

  if (uniqueshoulderItems.length > 0) {
    setSelectedItems(prevItems => [...prevItems, ...uniqueshoulderItems]);
    setSelecteditems(uniqueshoulderItems)
    setShouldersClick(false);
    setSelectedIndices([]);
    toast.success("Symptom added successfully.", {
      position: toast.POSITION.TOP_CENTER
    });
  } else {
    toast.error("Symptom already exists.", {
      position: toast.POSITION.TOP_CENTER
    });
    setShouldersClick(false);
    setSelectedIndices([]);
  }
};





const handleSendchestItems = () => {
  const selectedchestItems = selectedIndices.map(index => {
    const chestDataItem = chestData.find((_, dataIndex) => dataIndex === index);
    return chestDataItem ? chestDataItem.title : null;
  });

  const uniquechestItems = selectedchestItems.filter(item => item && !selectedItems.includes(item)&&!selectedSymptoms.includes(item));

  if (uniquechestItems.length > 0) {
    setSelectedItems(prevItems => [...prevItems, ...uniquechestItems]);
    setSelecteditems(uniquechestItems)
    setChestClick(false);
    setSelectedIndices([]);
    toast.success("Symptom added successfully.", {
      position: toast.POSITION.TOP_CENTER
    });
  } else {
    toast.error("Symptom already exists.", {
      position: toast.POSITION.TOP_CENTER
    });
    setChestClick(false);
    setSelectedIndices([]);
  }
};

const handleSendheartItems = () => {
  const selectedheartItems = selectedIndices.map(index => {
    const heartDataItem = heartData.find((_, dataIndex) => dataIndex === index);
    return heartDataItem ? heartDataItem.title : null;
  });

  const uniqueheartItems = selectedheartItems.filter(item => item && !selectedItems.includes(item)&&!selectedSymptoms.includes(item));

  if (uniqueheartItems.length > 0) {
    setSelectedItems(prevItems => [...prevItems, ...uniqueheartItems]);
    setSelecteditems(uniqueheartItems)
    setHeartClick(false);
    setSelectedIndices([]);
    toast.success("Symptom added successfully.", {
      position: toast.POSITION.TOP_CENTER
    });
  } else {
    toast.error("Symptom already exists.", {
      position: toast.POSITION.TOP_CENTER
    });
    setHeartClick(false);
    setSelectedIndices([]);
  }
};

const handleSendliverItems = () => {
  const selectedliverItems = selectedIndices.map(index => {
    const liverDataItem = liverData.find((_, dataIndex) => dataIndex === index);
    return liverDataItem ? liverDataItem.title : null;
  });

  const uniqueliverItems = selectedliverItems.filter(item => item && !selectedItems.includes(item)&&!selectedSymptoms.includes(item));

  if (uniqueliverItems.length > 0) {
    setSelectedItems(prevItems => [...prevItems, ...uniqueliverItems]);
    setSelecteditems(uniqueliverItems)
    setLiverClick(false);
    setSelectedIndices([]);
    toast.success("Symptom added successfully.", {
      position: toast.POSITION.TOP_CENTER
    });
  } else {
    toast.error("Symptom already exists.", {
      position: toast.POSITION.TOP_CENTER
    });
    setLiverClick(false);
    setSelectedIndices([]);
  }
};

const handleSendfingerItems = () => {
  const selectedfingerItems = selectedIndices.map(index => {
    const fingerDataItem = fingerData.find((_, dataIndex) => dataIndex === index);
    return fingerDataItem ? fingerDataItem.title : null;
  });

  const uniquefingerItems = selectedfingerItems.filter(item => item && !selectedItems.includes(item)&&!selectedSymptoms.includes(item));

  if (uniquefingerItems.length > 0) {
    setSelectedItems(prevItems => [...prevItems, ...uniquefingerItems]);
    setSelecteditems(uniquefingerItems)
    setFingersClick(false);
    setSelectedIndices([]);
    toast.success("Symptom added successfully.", {
      position: toast.POSITION.TOP_CENTER
    });
  } else {
    toast.error("Symptom already exists.", {
      position: toast.POSITION.TOP_CENTER
    });
    setFingersClick(false);
    setSelectedIndices([]);
  }
};

const handleSendarmItems = () => {
  const selectedarmItems = selectedIndices.map(index => {
    const armDataItem = armData.find((_, dataIndex) => dataIndex === index);
    return armDataItem ? armDataItem.title : null;
  });

  const uniquearmItems = selectedarmItems.filter(item => item && !selectedItems.includes(item)&&!selectedSymptoms.includes(item));

  if (uniquearmItems.length > 0) {
    setSelectedItems(prevItems => [...prevItems, ...uniquearmItems]);
    setSelecteditems(uniquearmItems)
    setArmsClick(false);
    setSelectedIndices([]);
    toast.success("Symptom added successfully.", {
      position: toast.POSITION.TOP_CENTER
    });
  } else {
    toast.error("Symptom already exists.", {
      position: toast.POSITION.TOP_CENTER
    });
    setArmsClick(false);
    setSelectedIndices([]);
  }
};

const handleSendelbowItems = () => {
  const selectedelbowItems = selectedIndices.map(index => {
    const elbowDataItem = elbowData.find((_, dataIndex) => dataIndex === index);
    return elbowDataItem ? elbowDataItem.title : null;
  });

  const uniqueelbowItems = selectedelbowItems.filter(item => item && !selectedItems.includes(item)&&!selectedSymptoms.includes(item));

  if (uniqueelbowItems.length > 0) {
    setSelectedItems(prevItems => [...prevItems, ...uniqueelbowItems]);
    setSelecteditems(uniqueelbowItems)
    setElbowClick(false);
    setSelectedIndices([]);
    toast.success("Symptom added successfully.", {
      position: toast.POSITION.TOP_CENTER
    });
  } else {
    toast.error("Symptom already exists.", {
      position: toast.POSITION.TOP_CENTER
    });
    setElbowClick(false);
    setSelectedIndices([]);
  }
};

const handleSendhandItems = () => {
  const selectedhandItems = selectedIndices.map(index => {
    const handDataItem = handData.find((_, dataIndex) => dataIndex === index);
    return handDataItem ? handDataItem.title : null;
  });

  const uniquehandItems = selectedhandItems.filter(item => item && !selectedItems.includes(item)&&!selectedSymptoms.includes(item));

  if (uniquehandItems.length > 0) {
    setSelectedItems(prevItems => [...prevItems, ...uniquehandItems]);
    setSelecteditems(uniquehandItems)
    setHandsClick(false);
    setSelectedIndices([]);
    toast.success("Symptom added successfully.", {
      position: toast.POSITION.TOP_CENTER
    });
  } else {
    toast.error("Symptom already exists.", {
      position: toast.POSITION.TOP_CENTER
    });
    setHandsClick(false);
    setSelectedIndices([]);
  }
};

const handleSendpelvicItems = () => {
  const selectedpelvicItems = selectedIndices.map(index => {
    const pelvicDataItem = pelvicData.find((_, dataIndex) => dataIndex === index);
    return pelvicDataItem ? pelvicDataItem.title : null;
  });

  const uniquepelvicItems = selectedpelvicItems.filter(item => item && !selectedItems.includes(item)&&!selectedSymptoms.includes(item));

  if (uniquepelvicItems.length > 0) {
    setSelectedItems(prevItems => [...prevItems, ...uniquepelvicItems]);
    setSelecteditems(uniquepelvicItems)
    setPelvicClick(false);
    setSelectedIndices([]);
    toast.success("Symptom added successfully.", {
      position: toast.POSITION.TOP_CENTER
    });
  } else {
    toast.error("Symptom already exists.", {
      position: toast.POSITION.TOP_CENTER
    });
    setPelvicClick(false);
    setSelectedIndices([]);
  }
};

const handleSendabdomenItems = () => {
  const selectedabdomenItems = selectedIndices.map(index => {
    const abdomenDataItem = abdomenData.find((_, dataIndex) => dataIndex === index);
    return abdomenDataItem ? abdomenDataItem.title : null;
  });

  const uniqueabdomenItems = selectedabdomenItems.filter(item => item && !selectedItems.includes(item)&&!selectedSymptoms.includes(item));

  if (uniqueabdomenItems.length > 0) {
    setSelectedItems(prevItems => [...prevItems, ...uniqueabdomenItems]);
    setSelecteditems(uniqueabdomenItems)
    setAbdomenClick(false);
    setSelectedIndices([]);
    toast.success("Symptom added successfully.", {
      position: toast.POSITION.TOP_CENTER
    });
  } else {
    toast.error("Symptom already exists.", {
      position: toast.POSITION.TOP_CENTER
    });
    setAbdomenClick(false);
    setSelectedIndices([]);
  }
};


const handleSendkidneyItems = () => {
  const selectedkidneyItems = selectedIndices.map(index => {
    const kidneyDataItem = kidneyData.find((_, dataIndex) => dataIndex === index);
    return kidneyDataItem ? kidneyDataItem.title : null;
  });

  const uniquekidneyItems = selectedkidneyItems.filter(item => item && !selectedItems.includes(item)&&!selectedSymptoms.includes(item));

  if (uniquekidneyItems.length > 0) {
    setSelectedItems(prevItems => [...prevItems, ...uniquekidneyItems]); // Update selectedItems state with unique kidney items
    setSelecteditems(uniquekidneyItems)
    setKidneyClick(false); // Close the kidney div after sending
    setSelectedIndices([]); // Reset selected indices
    toast.success("Symptom added successfully.", {
      position: toast.POSITION.TOP_CENTER
    });
  } else {
    toast.error("Symptom already exists.", {
      position: toast.POSITION.TOP_CENTER
    });
    setKidneyClick(false); // Close the kidney div after sending
    setSelectedIndices([]); // Reset selected indices
  }
};



const handleSendbackItems = () => {
  const selectedbackItems = selectedIndices.map(index => {
    const backDataItem = backData.find((_, dataIndex) => dataIndex === index);
    return backDataItem ? backDataItem.title : null;
  });

  const uniquebackItems = selectedbackItems.filter(item => item && !selectedItems.includes(item)&&!selectedSymptoms.includes(item));

  const itemsToAdd = uniquebackItems.filter(item => !selectedItems.includes(item));

  if (itemsToAdd.length > 0) {
    setSelectedItems(prevItems => [...prevItems, ...itemsToAdd]); // Update selectedItems state with unique items
    setSelecteditems(itemsToAdd)
    setBackClick(false); // Close the eye div after sending
    setSelectedIndices([]); // Reset selected indices
    toast.success("Symptom added successfully.", {
      position: toast.POSITION.TOP_CENTER
    });
  } else {
    toast.error("Symptom already exists.", {
      position: toast.POSITION.TOP_CENTER
    });
    setBackClick(false); // Close the eye div after sending
    setSelectedIndices([]); // Reset selected indices
  }
};


const handleSendhipsItems = () => {
  const selectedhipsItems = selectedIndices.map(index => {
    const hipsDataItem = hipsData.find((_, dataIndex) => dataIndex === index);
    return hipsDataItem ? hipsDataItem.title : null;
  });

  const uniquehipsItems = selectedhipsItems.filter(item => item && !selectedItems.includes(item)&&!selectedSymptoms.includes(item));

  const itemsToAdd = uniquehipsItems.filter(item => !selectedItems.includes(item));

  if (itemsToAdd.length > 0) {
    setSelectedItems(prevItems => [...prevItems, ...itemsToAdd]); // Update selectedItems state with unique items
    setSelecteditems(itemsToAdd)
    setHipsClick(false); // Close the eye div after sending
    setSelectedIndices([]); // Reset selected indices
    toast.success("Symptom added successfully.", {
      position: toast.POSITION.TOP_CENTER
    });
  } else {
    toast.error("Symptom already exists.", {
      position: toast.POSITION.TOP_CENTER
    });
    setHipsClick(false); // Close the eye div after sending
    setSelectedIndices([]); // Reset selected indices
  }
};


const handleSendthighItems = () => {
  const selectedthighItems = selectedIndices.map(index => {
    const thighDataItem = thighData.find((_, dataIndex) => dataIndex === index);
    return thighDataItem ? thighDataItem.title : null;
  });

  const uniquethighItems = selectedthighItems.filter(item => item && !selectedItems.includes(item)&&!selectedSymptoms.includes(item));

  const itemsToAdd = uniquethighItems.filter(item => !selectedItems.includes(item));

  if (itemsToAdd.length > 0) {
    setSelectedItems(prevItems => [...prevItems, ...itemsToAdd]); // Update selectedItems state with unique items
    setSelecteditems(itemsToAdd)
    setThighsClick(false); // Close the eye div after sending
    setSelectedIndices([]); // Reset selected indices
    toast.success("Symptom added successfully.", {
      position: toast.POSITION.TOP_CENTER
    });
  } else {
    toast.error("Symptom already exists.", {
      position: toast.POSITION.TOP_CENTER
    });
    setThighsClick(false); // Close the eye div after sending
    setSelectedIndices([]); // Reset selected indices
  }
};


const handleSendkneeItems = () => {
  const selectedkneeItems = selectedIndices.map(index => {
    const kneeDataItem = kneeData.find((_, dataIndex) => dataIndex === index);
    return kneeDataItem ? kneeDataItem.title : null;
  });

  const uniquekneeItems = selectedkneeItems.filter(item => item && !selectedItems.includes(item)&&!selectedSymptoms.includes(item));

  const itemsToAdd = uniquekneeItems.filter(item => !selectedItems.includes(item));

  if (itemsToAdd.length > 0) {
    setSelectedItems(prevItems => [...prevItems, ...itemsToAdd]); // Update selectedItems state with unique items
    setSelecteditems(itemsToAdd)
    setKneesClick(false); // Close the eye div after sending
    setSelectedIndices([]); // Reset selected indices
    toast.success("Symptom added successfully.", {
      position: toast.POSITION.TOP_CENTER
    });
  } else {
    toast.error("Symptom already exists.", {
      position: toast.POSITION.TOP_CENTER
    });
    setKneesClick(false); // Close the eye div after sending
    setSelectedIndices([]); // Reset selected indices
  }
};

const handleSendlegItems = () => {
  const selectedlegItems = selectedIndices.map(index => {
    const legDataItem = legData.find((_, dataIndex) => dataIndex === index);
    return legDataItem ? legDataItem.title : null;
  });

  const uniquelegItems = selectedlegItems.filter(item => item && !selectedItems.includes(item)&&!selectedSymptoms.includes(item));

  const itemsToAdd = uniquelegItems.filter(item => !selectedItems.includes(item));

  if (itemsToAdd.length > 0) {
    setSelectedItems(prevItems => [...prevItems, ...itemsToAdd]); // Update selectedItems state with unique items
    setSelecteditems(itemsToAdd)
    setLegsClick(false); // Close the eye div after sending
    setSelectedIndices([]); // Reset selected indices
    toast.success("Symptom added successfully.", {
      position: toast.POSITION.TOP_CENTER
    });
  } else {
    toast.error("Symptom already exists.", {
      position: toast.POSITION.TOP_CENTER
    });
    setLegsClick(false); // Close the eye div after sending
    setSelectedIndices([]); // Reset selected indices
  }
};


const handleSendfeetItems = () => {
  const selectedfeetItems = selectedIndices.map(index => {
    const feetDataItem = feetData.find((_, dataIndex) => dataIndex === index);
    return feetDataItem ? feetDataItem.title : null;
  });

  const uniquefeetItems = selectedfeetItems.filter(item => item && !selectedItems.includes(item)&&!selectedSymptoms.includes(item));

  const itemsToAdd = uniquefeetItems.filter(item => !selectedItems.includes(item));

  if (itemsToAdd.length > 0) {
    setSelectedItems(prevItems => [...prevItems, ...itemsToAdd]); // Update selectedItems state with unique items
    setSelecteditems(itemsToAdd)
    setFeetClick(false); // Close the eye div after sending
    setSelectedIndices([]); // Reset selected indices
    toast.success("Symptom added successfully.", {
      position: toast.POSITION.TOP_CENTER
    });
  } else {
    toast.error("Symptom already exists.", {
      position: toast.POSITION.TOP_CENTER
    });
    setFeetClick(false); // Close the eye div after sending
    setSelectedIndices([]); // Reset selected indices
  }
};



const handleSendotherItems = () => {
  const selectedotherItems = selectedIndices.map(index => {
    const otherDataItem = otherData.find((_, dataIndex) => dataIndex === index);
    return otherDataItem ? otherDataItem.title : null;
  });

  const uniqueotherItems = selectedotherItems.filter(item => item && !selectedItems.includes(item)&&!selectedSymptoms.includes(item));

  const itemsToAdd = uniqueotherItems.filter(item => !selectedItems.includes(item));

  if (itemsToAdd.length > 0) {
    setSelectedItems(prevItems => [...prevItems, ...itemsToAdd]); // Update selectedItems state with unique items
    setSelecteditems(itemsToAdd)
    setOthersClick(false); // Close the eye div after sending
    setSelectedIndices([]); // Reset selected indices
    toast.success("Symptom added successfully.", {
      position: toast.POSITION.TOP_CENTER
    });
  } else {
    toast.error("Symptom already exists.", {
      position: toast.POSITION.TOP_CENTER
    });
    setOthersClick(false); // Close the eye div after sending
    setSelectedIndices([]); // Reset selected indices
  }
};




const [noseClick, setNoseClick] = useState(false);
const [mouthClick, setMouthClick] = useState(false);
const [faceClick, setFaceClick] = useState(false);
const [skinClick, setSkinClick] = useState(false);
const [hairClick, setHairClick] = useState(false);
const [neckClick, setNeckClick] = useState(false);
const [shouldersClick, setShouldersClick] = useState(false);
const [chestClick, setChestClick] = useState(false);
const [heartClick, setHeartClick] = useState(false);
const [liverClick, setLiverClick] = useState(false);
const [fingersClick, setFingersClick] = useState(false);
const [armsClick, setArmsClick] = useState(false);
const [elbowClick, setElbowClick] = useState(false);
const [handsClick, setHandsClick] = useState(false);
const [pelvicClick, setPelvicClick] = useState(false);
const [abdomenClick, setAbdomenClick] = useState(false);
const [kidneyClick, setKidneyClick] = useState(false);
const [backClick, setBackClick] = useState(false);
const [hipsClick, setHipsClick] = useState(false);
const [thighsClick, setThighsClick] = useState(false);
const [kneesClick, setKneesClick] = useState(false);
const [legsClick, setLegsClick] = useState(false);
const [feetClick, setFeetClick] = useState(false);
const [othersClick, setOthersClick] = useState(false);


 
  const toggleheadClick = () => {
    setHeadClick(!headClick);
  };
  const toggleeyeClick = () => {
    seteyeClick(!eyeClick);
  };
  const toggleearClick = () => {
    setearClick(!earClick);
  };

  const toggleNoseClick = () => {
    setNoseClick(!noseClick);
  }
  
  const toggleMouthClick = () => {
    setMouthClick(!mouthClick);
  }
  
  const toggleFaceClick = () => {
    setFaceClick(!faceClick);
  }
  
  const toggleSkinClick = () => {
    setSkinClick(!skinClick);
  }
  
  const toggleHairClick = () => {
    setHairClick(!hairClick);
  }
  
  const toggleNeckClick = () => {
    setNeckClick(!neckClick);
  }
  
  const toggleShouldersClick = () => {
    setShouldersClick(!shouldersClick);
  }
  
  const toggleChestClick = () => {
    setChestClick(!chestClick);
  }
  
  const toggleHeartClick = () => {
    setHeartClick(!heartClick);
  }
  
  const toggleLiverClick = () => {
    setLiverClick(!liverClick);
  }
  
  const toggleFingersClick = () => {
    setFingersClick(!fingersClick);
  }
  
  const toggleArmsClick = () => {
    setArmsClick(!armsClick);
  }
  
  const toggleElbowClick = () => {
    setElbowClick(!elbowClick);
  }
  
  const toggleHandsClick = () => {
    setHandsClick(!handsClick);
  }
  
  const togglePelvicClick = () => {
    setPelvicClick(!pelvicClick);
  }
  
  const toggleAbdomenClick = () => {
    setAbdomenClick(!abdomenClick);
  }
  
  const toggleKidneyClick = () => {
    setKidneyClick(!kidneyClick);
  }
  
  const toggleBackClick = () => {
    setBackClick(!backClick);
  }
  
  const toggleHipsClick = () => {
    setHipsClick(!hipsClick);
  }
  
  const toggleThighsClick = () => {
    setThighsClick(!thighsClick);
  }
  
  const toggleKneesClick = () => {
    setKneesClick(!kneesClick);
  }
  
  const toggleLegsClick = () => {
    setLegsClick(!legsClick);
  }
  
  const toggleFeetClick = () => {
    setFeetClick(!feetClick);
  }
  
  const toggleOthersClick = () => {
    setOthersClick(!othersClick);
  }
  
  




  useEffect(() => {
    if (userState.SymList) {
      let syms = userState.SymList;
      let symsVal = userState.SymValList;
      setSelectedSymptoms(syms);
      setSelectedSymptomsVal(symsVal);
    }
  }, []);

  useEffect(() => {
    let newState = { ...userState };
    newState.SymList = selectedSymptoms;
    newState.SymValList = selectedSymptomsVal;
    setUserState(newState);
    saveUserState(newState);
  }, [selectedSymptomsVal]);


  const handleItemClick = (index) => {
    const isItemSelected = selectedIndices.includes(index);
  
    if (isItemSelected) {
      setSelectedIndices(selectedIndices.filter(itemIndex => itemIndex !== index));
    } else {
      setSelectedIndices([...selectedIndices, index]);
    }
  };
  
 
  


  const handleRemoveSymptom = (index) => {
    const updatedSymptoms = [...selectedSymptoms];
    const updatedSymptomsVal = [...selectedSymptomsVal];
    updatedSymptoms.splice(index, 1);
    updatedSymptomsVal.splice(index, 1);
    setSelectedSymptoms(updatedSymptoms);
    setSelectedSymptomsVal(updatedSymptomsVal);
    toast.success("Symptom removed.", {
      position: toast.POSITION.TOP_CENTER
    });
  };
  const handleRemoveSelectedItem = (indexToRemove) => {
    const updatedSelectedItems = selectedItems.filter((_, index) => index !== indexToRemove);
    console.log("updatedSelectedItems: ",updatedSelectedItems)
    setSelectedItems(updatedSelectedItems);
    // toast.success("Symptom removed.", {
    //   position: toast.POSITION.TOP_CENTER
    // });
  };
 
  const handleSubmit = () => {
    if (selectedSymptoms.length === 0) {
      setResult([]);
      return;
    }
    let data = makeSymList();
    console.log("Selected Symptoms:", selectedSymptomsVal);
    for (let i of selectedSymptomsVal) {
      data[i] = 1;
    }
    PredictionService.getRes(data)
      .then((res) => {
        console.log('Result of pred:', res.data);
        // Check if res.data is an array, if not, parse it
        const parsedResult = Array.isArray(res.data) ? res.data : JSON.parse(res.data);
        setResult(parsedResult);
      })
      .catch((err) => {
        console.log('Pred error:', err);
        setResult([]);
      });
  };
  
  const handleClear = () => {
    setSelectedSymptoms([]);
    setSelectedItems([]);
    // setSelectedSymptoms(updatedSymptoms);
    setSelectedSymptomsVal([]);
  };
  return (
    <>
    <ToastContainer position="top-center" />

      <div className="symptom-div">
        <div className="main-div">
          <div className="left-side">
            <h2>Add your symptoms</h2>
            <SearchBar
              placeholder="Enter a Symptom..."
              data={BookData}
              onSymptomSelect={handleSymptomSelect}
            />
            {/* Render selected  items here */}
            <div className="content-div symptomdiv">
  {(selectedSymptoms.length === 0 && selectedItems.length === 0) && (
    <p>Add at least three symptoms</p>
  )}

  {selectedSymptoms.length > 0 || selectedItems.length > 0 ? (
    <ul>
      {[...new Set([...selectedSymptoms, ...selectedItems])].map((item, index) => (
        <li key={index}>
          {item}
          <FaTimes
            className='crossitem'
            onClick={() => {
              if (selectedSymptoms.includes(item)) {
                handleRemoveSymptom(index);
                handleRemoveSelectedItem(index);
              }
            }}
          />
        </li>
      ))}
    </ul>
  ) : null}
  
</div>

<div className="lower">
  {[...new Set([...selectedSymptoms, ...selectedItems])].length >= 3 && (
    <button className='predictbtn' onClick={handleSubmit}>Predict</button>
  )}
  {(selectedSymptoms.length > 0 || selectedItems.length > 0) && (
          <button className='clearbtn' onClick={handleClear}>Clear</button>
        )}
</div>

              
            </div>
          <div className="right-side">
            <div className='partdiv'>
              <h2>Search using body parts:</h2>
              <div>
                <p onClick={toggleheadClick}>Head</p>
                <p onClick={toggleeyeClick}>Eye</p>
                <p onClick={toggleearClick}>Ears</p>
                
      <p onClick={toggleNoseClick}>Nose</p>
      <p onClick={toggleMouthClick}>Mouth</p>
      <p onClick={toggleFaceClick}>Face</p>
      <p onClick={toggleSkinClick}>Skin</p>
      <p onClick={toggleHairClick}>Hair</p>
      <p onClick={toggleNeckClick}>Neck</p>
      <p onClick={toggleShouldersClick}>Shoulders</p>
      <p onClick={toggleChestClick}>Chest</p>
      <p onClick={toggleHeartClick}>Heart</p>
      <p onClick={toggleLiverClick}>Liver</p>
      <p onClick={toggleFingersClick}>Fingers</p>
      <p onClick={toggleArmsClick}>Arms</p>
      <p onClick={toggleElbowClick}>Elbow</p>
      <p onClick={toggleHandsClick}>Hands</p>
      <p onClick={togglePelvicClick}>Pelvic</p>
      <p onClick={toggleAbdomenClick}>Abdomen</p>
      <p onClick={toggleKidneyClick}>Kidney</p>
      <p onClick={toggleBackClick}>Back</p>
      <p onClick={toggleHipsClick}>Hips</p>
      <p onClick={toggleThighsClick}>Thighs</p>
      <p onClick={toggleKneesClick}>Knees</p>
      <p onClick={toggleLegsClick}>Legs</p>
      <p onClick={toggleFeetClick}>Feet</p>
      <p onClick={toggleOthersClick}>Others</p>

              </div>
            </div>
            {headClick && (
              <div className='headdiv'>
                <div style={{ overflowY: 'scroll', paddingRight: '17px', height: '95%' }}>
                  <div>
                    {headdata.map((item, index) => (
                      <p key={index} onClick={() => handleItemClick(index)} style={{ cursor: 'pointer', backgroundColor: selectedIndices.includes(index) ? '#000' : '#017272' }}>{item.title}</p>
                    ))}
                  </div>
                </div>
                <div className='btndiv'>
                  <button onClick={handleSendHeadItems}>Send</button>
                  <button onClick={() => setHeadClick(false)}>Cancel</button>
                </div>
              </div>
            )}




            {eyeClick && (
              <div className='headdiv'>
                <div style={{ overflowY: 'scroll', paddingRight: '17px', height: '95%' }}>
                  <div>
                    {eyesData.map((item, index) => (
                      <p key={index} onClick={() => handleItemClick(index)} style={{ cursor: 'pointer', backgroundColor: selectedIndices.includes(index) ? '#000' : '#017272' }}>{item.title}</p>
                    ))}
                  </div>
                </div>
                <div className='btndiv'>
                  <button onClick={handleSendEyeItems}>Send</button>
                  <button onClick={() => seteyeClick(false)}>Cancel</button>
                </div>
              </div>
            )}


           {earClick && (
              <div className='headdiv'>
                <div style={{ overflowY: 'scroll', paddingRight: '17px', height: '95%' }}>
                  <div>
                    {earData.map((item, index) => (
                      <p key={index} onClick={() => handleItemClick(index)} style={{ cursor: 'pointer', backgroundColor: selectedIndices.includes(index) ? '#000' : '#017272' }}>{item.title}</p>
                    ))}
                  </div>
                </div>
                <div className='btndiv'>
                  <button onClick={handleSendEarItems}>Send</button>
                  <button onClick={() => setearClick(false)}>Cancel</button>
                </div>
              </div>
            )}



           {noseClick && (
              <div className='headdiv'>
                <div style={{ overflowY: 'scroll', paddingRight: '17px', height: '95%' }}>
                  <div>
                    {noseData.map((item, index) => (
                      <p key={index} onClick={() => handleItemClick(index)} style={{ cursor: 'pointer', backgroundColor: selectedIndices.includes(index) ? '#000' : '#017272' }}>{item.title}</p>
                    ))}
                  </div>
                </div>
                <div className='btndiv'>
                  <button onClick={handleSendnoseItems}>Send</button>
                  <button onClick={() => setNoseClick(false)}>Cancel</button>
                </div>
              </div>
            )}


{mouthClick && (
              <div className='headdiv'>
                <div style={{ overflowY: 'scroll', paddingRight: '17px', height: '95%' }}>
                  <div>
                    {mouthData.map((item, index) => (
                      <p key={index} onClick={() => handleItemClick(index)} style={{ cursor: 'pointer', backgroundColor: selectedIndices.includes(index) ? '#000' : '#017272' }}>{item.title}</p>
                    ))}
                  </div>
                </div>
                <div className='btndiv'>
                  <button onClick={handleSendmouthItems}>Send</button>
                  <button onClick={() => setMouthClick(false)}>Cancel</button>
                </div>
              </div>
            )}
           



           {faceClick && (
              <div className='headdiv'>
                <div style={{ overflowY: 'scroll', paddingRight: '17px', height: '95%' }}>
                  <div>
                    {faceData.map((item, index) => (
                      <p key={index} onClick={() => handleItemClick(index)} style={{ cursor: 'pointer', backgroundColor: selectedIndices.includes(index) ? '#000' : '#017272' }}>{item.title}</p>
                    ))}
                  </div>
                </div>
                <div className='btndiv'>
                  <button onClick={handleSendfaceItems}>Send</button>
                  <button onClick={() => setFaceClick(false)}>Cancel</button>
                </div>
              </div>
            )}



{skinClick && (
              <div className='headdiv'>
                <div style={{ overflowY: 'scroll', paddingRight: '17px', height: '95%' }}>
                  <div>
                    {skinData.map((item, index) => (
                      <p key={index} onClick={() => handleItemClick(index)} style={{ cursor: 'pointer', backgroundColor: selectedIndices.includes(index) ? '#000' : '#017272' }}>{item.title}</p>
                    ))}
                  </div>
                </div>
                <div className='btndiv'>
                  <button onClick={handleSendskinItems}>Send</button>
                  <button onClick={() => setSkinClick(false)}>Cancel</button>
                </div>
              </div>
            )}


{hairClick && (
              <div className='headdiv'>
                <div style={{ overflowY: 'scroll', paddingRight: '17px', height: '95%' }}>
                  <div>
                    {hairData.map((item, index) => (
                      <p key={index} onClick={() => handleItemClick(index)} style={{ cursor: 'pointer', backgroundColor: selectedIndices.includes(index) ? '#000' : '#017272' }}>{item.title}</p>
                    ))}
                  </div>
                </div>
                <div className='btndiv'>
                  <button onClick={handleSendhairItems}>Send</button>
                  <button onClick={() => setHairClick(false)}>Cancel</button>
                </div>
              </div>
            )}


{neckClick && (
              <div className='headdiv'>
                <div style={{ overflowY: 'scroll', paddingRight: '17px', height: '95%' }}>
                  <div>
                    {neckData.map((item, index) => (
                      <p key={index} onClick={() => handleItemClick(index)} style={{ cursor: 'pointer', backgroundColor: selectedIndices.includes(index) ? '#000' : '#017272' }}>{item.title}</p>
                    ))}
                  </div>
                </div>
                <div className='btndiv'>
                  <button onClick={handleSendneckItems}>Send</button>
                  <button onClick={() => setNeckClick(false)}>Cancel</button>
                </div>
              </div>
            )}


{shouldersClick && (
              <div className='headdiv'>
                <div style={{ overflowY: 'scroll', paddingRight: '17px', height: '95%' }}>
                  <div>
                    {shoulderData.map((item, index) => (
                      <p key={index} onClick={() => handleItemClick(index)} style={{ cursor: 'pointer', backgroundColor: selectedIndices.includes(index) ? '#000' : '#017272' }}>{item.title}</p>
                    ))}
                  </div>
                </div>
                <div className='btndiv'>
                  <button onClick={handleSendshoulderItems}>Send</button>
                  <button onClick={() => setShouldersClick(false)}>Cancel</button>
                </div>
              </div>
            )}


{chestClick && (
              <div className='headdiv'>
                <div style={{ overflowY: 'scroll', paddingRight: '17px', height: '95%' }}>
                  <div>
                    {chestData.map((item, index) => (
                      <p key={index} onClick={() => handleItemClick(index)} style={{ cursor: 'pointer', backgroundColor: selectedIndices.includes(index) ? '#000' : '#017272' }}>{item.title}</p>
                    ))}
                  </div>
                </div>
                <div className='btndiv'>
                  <button onClick={handleSendchestItems}>Send</button>
                  <button onClick={() => setChestClick(false)}>Cancel</button>
                </div>
              </div>
            )}


{heartClick && (
              <div className='headdiv'>
                <div style={{ overflowY: 'scroll', paddingRight: '17px', height: '95%' }}>
                  <div>
                    {heartData.map((item, index) => (
                      <p key={index} onClick={() => handleItemClick(index)} style={{ cursor: 'pointer', backgroundColor: selectedIndices.includes(index) ? '#000' : '#017272' }}>{item.title}</p>
                    ))}
                  </div>
                </div>
                <div className='btndiv'>
                  <button onClick={handleSendheartItems}>Send</button>
                  <button onClick={() => setHeartClick(false)}>Cancel</button>
                </div>
              </div>
            )}



{liverClick && (
              <div className='headdiv'>
                <div style={{ overflowY: 'scroll', paddingRight: '17px', height: '95%' }}>
                  <div>
                    {liverData.map((item, index) => (
                      <p key={index} onClick={() => handleItemClick(index)} style={{ cursor: 'pointer', backgroundColor: selectedIndices.includes(index) ? '#000' : '#017272' }}>{item.title}</p>
                    ))}
                  </div>
                </div>
                <div className='btndiv'>
                  <button onClick={handleSendliverItems}>Send</button>
                  <button onClick={() => setLiverClick(false)}>Cancel</button>
                </div>
              </div>
            )}

{fingersClick && (
              <div className='headdiv'>
                <div style={{ overflowY: 'scroll', paddingRight: '17px', height: '95%' }}>
                  <div>
                    {fingerData.map((item, index) => (
                      <p key={index} onClick={() => handleItemClick(index)} style={{ cursor: 'pointer', backgroundColor: selectedIndices.includes(index) ? '#000' : '#017272' }}>{item.title}</p>
                    ))}
                  </div>
                </div>
                <div className='btndiv'>
                  <button onClick={handleSendfingerItems}>Send</button>
                  <button onClick={() => setFingersClick(false)}>Cancel</button>
                </div>
              </div>
            )}

{armsClick && (
              <div className='headdiv'>
                <div style={{ overflowY: 'scroll', paddingRight: '17px', height: '95%' }}>
                  <div>
                    {armData.map((item, index) => (
                      <p key={index} onClick={() => handleItemClick(index)} style={{ cursor: 'pointer', backgroundColor: selectedIndices.includes(index) ? '#000' : '#017272' }}>{item.title}</p>
                    ))}
                  </div>
                </div>
                <div className='btndiv'>
                  <button onClick={handleSendarmItems}>Send</button>
                  <button onClick={() => setArmsClick(false)}>Cancel</button>
                </div>
              </div>
            )}

{elbowClick && (
              <div className='headdiv'>
                <div style={{ overflowY: 'scroll', paddingRight: '17px', height: '95%' }}>
                  <div>
                    {elbowData.map((item, index) => (
                      <p key={index} onClick={() => handleItemClick(index)} style={{ cursor: 'pointer', backgroundColor: selectedIndices.includes(index) ? '#000' : '#017272' }}>{item.title}</p>
                    ))}
                  </div>
                </div>
                <div className='btndiv'>
                  <button onClick={handleSendelbowItems}>Send</button>
                  <button onClick={() => setElbowClick(false)}>Cancel</button>
                </div>
              </div>
            )}

{handsClick && (
              <div className='headdiv'>
                <div style={{ overflowY: 'scroll', paddingRight: '17px', height: '95%' }}>
                  <div>
                    {handData.map((item, index) => (
                      <p key={index} onClick={() => handleItemClick(index)} style={{ cursor: 'pointer', backgroundColor: selectedIndices.includes(index) ? '#000' : '#017272' }}>{item.title}</p>
                    ))}
                  </div>
                </div>
                <div className='btndiv'>
                  <button onClick={handleSendhandItems}>Send</button>
                  <button onClick={() => setHandsClick(false)}>Cancel</button>
                </div>
              </div>
            )}



{pelvicClick && (
              <div className='headdiv'>
                <div style={{ overflowY: 'scroll', paddingRight: '17px', height: '95%' }}>
                  <div>
                    {pelvicData.map((item, index) => (
                      <p key={index} onClick={() => handleItemClick(index)} style={{ cursor: 'pointer', backgroundColor: selectedIndices.includes(index) ? '#000' : '#017272' }}>{item.title}</p>
                    ))}
                  </div>
                </div>
                <div className='btndiv'>
                  <button onClick={handleSendpelvicItems}>Send</button>
                  <button onClick={() => setPelvicClick(false)}>Cancel</button>
                </div>
              </div>
            )}


{abdomenClick && (
              <div className='headdiv'>
                <div style={{ overflowY: 'scroll', paddingRight: '17px', height: '95%' }}>
                  <div>
                    {abdomenData.map((item, index) => (
                      <p key={index} onClick={() => handleItemClick(index)} style={{ cursor: 'pointer', backgroundColor: selectedIndices.includes(index) ? '#000' : '#017272' }}>{item.title}</p>
                    ))}
                  </div>
                </div>
                <div className='btndiv'>
                  <button onClick={handleSendabdomenItems}>Send</button>
                  <button onClick={() => setAbdomenClick(false)}>Cancel</button>
                </div>
              </div>
            )}



{kidneyClick && (
              <div className='headdiv'>
                <div style={{ overflowY: 'scroll', paddingRight: '17px', height: '95%' }}>
                  <div>
                    {kidneyData.map((item, index) => (
                      <p key={index} onClick={() => handleItemClick(index)} style={{ cursor: 'pointer', backgroundColor: selectedIndices.includes(index) ? '#000' : '#017272' }}>{item.title}</p>
                    ))}
                  </div>
                </div>
                <div className='btndiv'>
                  <button onClick={handleSendkidneyItems}>Send</button>
                  <button onClick={() => setKidneyClick(false)}>Cancel</button>
                </div>
              </div>
            )}



{backClick && (
              <div className='headdiv'>
                <div style={{ overflowY: 'scroll', paddingRight: '17px', height: '95%' }}>
                  <div>
                    {backData.map((item, index) => (
                      <p key={index} onClick={() => handleItemClick(index)} style={{ cursor: 'pointer', backgroundColor: selectedIndices.includes(index) ? '#000' : '#017272' }}>{item.title}</p>
                    ))}
                  </div>
                </div>
                <div className='btndiv'>
                  <button onClick={handleSendbackItems}>Send</button>
                  <button onClick={() => setBackClick(false)}>Cancel</button>
                </div>
              </div>
            )}


{hipsClick && (
              <div className='headdiv'>
                <div style={{ overflowY: 'scroll', paddingRight: '17px', height: '95%' }}>
                  <div>
                    {hipsData.map((item, index) => (
                      <p key={index} onClick={() => handleItemClick(index)} style={{ cursor: 'pointer', backgroundColor: selectedIndices.includes(index) ? '#000' : '#017272' }}>{item.title}</p>
                    ))}
                  </div>
                </div>
                <div className='btndiv'>
                  <button onClick={handleSendhipsItems}>Send</button>
                  <button onClick={() => setHipsClick(false)}>Cancel</button>
                </div>
              </div>
            )}


{thighsClick && (
              <div className='headdiv'>
                <div style={{ overflowY: 'scroll', paddingRight: '17px', height: '95%' }}>
                  <div>
                    {thighData.map((item, index) => (
                      <p key={index} onClick={() => handleItemClick(index)} style={{ cursor: 'pointer', backgroundColor: selectedIndices.includes(index) ? '#000' : '#017272' }}>{item.title}</p>
                    ))}
                  </div>
                </div>
                <div className='btndiv'>
                  <button onClick={handleSendthighItems}>Send</button>
                  <button onClick={() => setThighsClick(false)}>Cancel</button>
                </div>
              </div>
            )}


{kneesClick && (
              <div className='headdiv'>
                <div style={{ overflowY: 'scroll', paddingRight: '17px', height: '95%' }}>
                  <div>
                    {kneeData.map((item, index) => (
                      <p key={index} onClick={() => handleItemClick(index)} style={{ cursor: 'pointer', backgroundColor: selectedIndices.includes(index) ? '#000' : '#017272' }}>{item.title}</p>
                    ))}
                  </div>
                </div>
                <div className='btndiv'>
                  <button onClick={handleSendkneeItems}>Send</button>
                  <button onClick={() => setKneesClick(false)}>Cancel</button>
                </div>
              </div>
            )}

{legsClick && (
              <div className='headdiv'>
                <div style={{ overflowY: 'scroll', paddingRight: '17px', height: '95%' }}>
                  <div>
                    {legData.map((item, index) => (
                      <p key={index} onClick={() => handleItemClick(index)} style={{ cursor: 'pointer', backgroundColor: selectedIndices.includes(index) ? '#000' : '#017272' }}>{item.title}</p>
                    ))}
                  </div>
                </div>
                <div className='btndiv'>
                  <button onClick={handleSendlegItems}>Send</button>
                  <button onClick={() => setLegsClick(false)}>Cancel</button>
                </div>
              </div>
            )}

{feetClick && (
              <div className='headdiv'>
                <div style={{ overflowY: 'scroll', paddingRight: '17px', height: '95%' }}>
                  <div>
                    {feetData.map((item, index) => (
                      <p key={index} onClick={() => handleItemClick(index)} style={{ cursor: 'pointer', backgroundColor: selectedIndices.includes(index) ? '#000' : '#017272' }}>{item.title}</p>
                    ))}
                  </div>
                </div>
                <div className='btndiv'>
                  <button onClick={handleSendfeetItems}>Send</button>
                  <button onClick={() => setFeetClick(false)}>Cancel</button>
                </div>
              </div>
            )}



{othersClick && (
              <div className='headdiv'>
                <div style={{ overflowY: 'scroll', paddingRight: '17px', height: '95%' }}>
                  <div>
                    {otherData.map((item, index) => (
                      <p key={index} onClick={() => handleItemClick(index)} style={{ cursor: 'pointer', backgroundColor: selectedIndices.includes(index) ? '#000' : '#017272' }}>{item.title}</p>
                    ))}
                  </div>
                </div>
                <div className='btndiv'>
                  <button onClick={handleSendotherItems}>Send</button>
                  <button onClick={() => setOthersClick(false)}>Cancel</button>
                </div>
              </div>
            )}






          </div>
        </div>
        
      </div>
      {/* <div >
  <p >Predictions:</p> <br />
  {Object.keys(result).map((key) => (
    <div key={key}>
       {result[key]} <br />
    </div>
  ))}
</div> */}

<h2 style={{textAlign:'center',fontSize:'30px', textTransform:'uppercase'}}>Result:</h2>

<div className='predict'>
  {result && result.length > 0 ? (
    <table className="predictions-table">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Prediction</th>
          {/* <th>Percentage</th> */}
        </tr>
      </thead>
      <tbody>
        {result.slice(1).map((item, index) => { // Ignore the first row by using slice(1)
          // Check if item is a string
          if (typeof item === 'string') {
            // Assuming each item is in the format: {'Prediction'} - Percentage%
            const predictionParts = item.split(' - ');
            let prediction = predictionParts[0].replace('{', '').replace('}', '');
            prediction = prediction.replace(/'/g, ''); // Remove single quotes
            const percentage = predictionParts[1];

            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{prediction}</td>
                {/* <td>{percentage}</td> */}
              </tr>
            );
          } else {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td colSpan="2">{item}</td> {/* If item is not a string, display it in a single cell */}
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  ) : (
    <p>No predictions available.</p>
  )}
</div>


    </>
  );
}

export default Symptom;

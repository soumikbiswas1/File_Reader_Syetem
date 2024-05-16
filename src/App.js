import "./App.css"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function FileUploader() {
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [fileUrls, setFileUrls] = useState([]);


  // const handleFileUpload = (event) => {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();

  //   reader.onload = () => {
  //     const fileContent = reader.result;
  //     const blob = new Blob([fileContent], { type: 'text/plain' });
  //     const url = URL.createObjectURL(blob);

  //     const newTab = {
  //       id: Date.now(),
  //       title: file.name,
  //       content: fileContent,
  //       url:url,
  //     };
  //     setTabs([...tabs, newTab]);
  //     setActiveTab(newTab.id);

  //     window.open(url, '_blank');
  //   };

  //   reader.readAsText(file);
  // };
  // const handleFileUpload = (event) => {
  //   const file = event.target.files[0];
  //   const url = URL.createObjectURL(file);

  //   const newTab = {
  //     id: Date.now(),
  //     title: file.name,
  //     url: url,
  //   };

  //   setTabs([...tabs, newTab]);
  //   setActiveTab(newTab.id);

  //   // Open the file in a new tab
  //   setTimeout(() => {
  //     window.open(url, '_blank');
  //   }, 0);
  // };
  // const handleFileUpload = (event) => {
  //   const files = event.target.files;
  //   if (files.length > 0) {
  //     const url = URL.createObjectURL(files[0]);
  //     setFileUrl(url);
  //   }

  //   let newTabs = [...tabs]; // Copy the existing tabs

  //   for (let i = 0; i < files.length; i++) {
  //     const file = files[i];
  //     const url = URL.createObjectURL(file);

  //     const newTab = {
  //       id: Date.now() + i, // Add i to ensure each tab has a unique id
  //       title: file.name,
  //       url: url,
  //     };

  //     newTabs.push(newTab); // Add the new tab to the list

  //     // Defer the call to window.open() until after the file chooser dialog has closed
  //     setTimeout(() => {
  //       window.open(url, '_blank');
  //     }, 0);
  //   }

  //   setTabs(newTabs); // Update the state with the new list of tabs
  // };

  const handleFileUpload = (event) => {
    const files = event.target.files;

    if (files.length > 0) {
      const url = URL.createObjectURL(files[0]);
      setFileUrls([...fileUrls, url]);
    }
  };



  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const handleCloseTab = (id, event) => {
    event.stopPropagation();
    setTabs(tabs.filter(tab => tab.id !== id));
  };

  return (
    <div>
      <div class="navbar">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#gallery">Gallery</a>
      </div>
      <div className="upload-container">
  <input type="file" id="file" className="file-input" onChange={handleFileUpload} />
  <label htmlFor="file" className="custom-file-upload">
    <FontAwesomeIcon icon={faUpload} /> Choose file
  </label>
</div>
      {/* <div className="tabs">
        {tabs.map(tab => (
          <div
            key={tab.id}
            className={activeTab === tab.id ? 'tab active' : 'tab'}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.title}
            <button className="cross-button" onClick={(event) => handleCloseTab(tab.id,event)}>
            <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        ))}
      </div>
      <div className="content">
        {tabs.map(tab => (
          <div
            key={tab.id}
            className={activeTab === tab.id ? 'active' : 'inactive'}
          >
            {tab.content}
          </div>
        ))}

      </div> */}
      <div className="tabs">
  {fileUrls.map((fileUrl, index) => (
    <button key={index} onClick={() => setActiveTab(index)} className={index === activeTab ? 'active' : ''}>
      File {index + 1}
    </button>
  ))}
</div>
{fileUrls.length > 0 && (
  <object data={fileUrls[activeTab]} type="application/pdf" width="100%" height="600px">
    <p>It appears you don't have a PDF plugin for this browser. No biggie... you can <a href={fileUrls[activeTab]}>click here to download the PDF file.</a></p>
  </object>
)}
    </div>
  );
}

export default FileUploader;

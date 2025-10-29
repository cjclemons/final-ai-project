
export async function PhaseTwoDataHandling(base64Image: string) {
    

 
    try {
      const res = await fetch(
        "https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseTwo",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ image: base64Image }),
        }
      );

      const data = await res.json();
      console.log("✅ API Response:", data);
    } catch (error) {
      console.error("❌ Error uploading image:", error);
    }
  };

  


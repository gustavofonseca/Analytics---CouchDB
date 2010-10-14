function logger(val){
   $.couch.db("logger").saveDoc(
     {host: "address", name: "Wilma", mobile: "555-003"},
     {success: function() { alert("Saved ok."); }}
   );
}
const products = [
  {
    id: "T015",
    type: "Pen",
    brand: "Mont",
    title: "pen",
    collection: "pen",
    description: "ballpoint-pen-black-pack-of-10",
    price: 100,
    src:
      "https://cdn.shopify.com/s/files/1/0253/7911/0974/files/b2_6acdcbdf-cc1b-4ff0-af67-96815d46fe86.jpg?v=1683802904&width=1000",
  },
  {
    id: "S014",
    type: "pen",
    brand: "Blue Mart",
    title: "pencil",
    description: "Pencil ten Setmarkd",
    price: 150,
    src:
      "https://cdn.shopify.com/s/files/1/0253/7911/0974/files/DeliMechanicalPencil60200.jpg?v=1685440490&width=1000",
  },
  {
    id: "S014",
    type: "pen",
    brand: "Blue Mart",
    title: "ink pen",
    description: "Pen ten Setmarkd",
    price: 150,
    src:
      "https://cdn.shopify.com/s/files/1/0253/7911/0974/products/xsa.jpg?v=1674021150&width=800",
  },
  {
    id: "G013",
    type: "pen",
    brand: "jeely",
    title: "Marker",
    collection: "",
    description: "2.0mm-Marker",
    price: 170,
    src:
      "https://cdn.shopify.com/s/files/1/0253/7911/0974/products/summary_sakura_industrial_extrabroad_818x348_62341486-ec73-469c-925d-f86dcf2a87f2.webp?v=1683632856&width=600",
  },
  {
    id: "V812",
    type: "pen",
    brand: "Dux",
    title: "Water Color",
    collection: "",
    description: "waterColor paint",
    price: 170,
    src:
      "https://cdn.shopify.com/s/files/1/0253/7911/0974/products/sharkwatercolour.jpg?v=1673354983&width=600",
  },
  {
    id: "E812",
    type: "pen",
    brand: "Mart",
    title: " Color Chalk",
    description: "3.0mm chalk",
    price: 670,
    src:
      "https://cdn.shopify.com/s/files/1/0253/7911/0974/products/mixcolourchalk.jpg?v=1673337008&width=600",
  },
  {
    id: "B413",
    type: "pen",
    brand: "jeely",
    title: "Sharpner",
    collection: "",
    description: "Shapes D-2",
    price: 170,
    src:
      "https://cdn.shopify.com/s/files/1/0253/7911/0974/products/Sharpener-Machine-80001.jpg?v=1673350614&width=600",
  },

    {
      id: "A612",
      type: "pen",
      brand: "Dux",
      title: "Power Sharpner",
      description: "Sharpner 0616B",
      price: 170,
      src:
        "https://cdn.shopify.com/s/files/1/0253/7911/0974/products/233.jpg?v=1680603796&width=800",
    },
    {
      id: "S41",
      type: "pen",
      brand: "Dhile",
      title: "Plastic Ruler",
      collection: "",
      description: "card1Sensa Plastic Ruler",
      price: 670,
      src:
        "https://cdn.shopify.com/s/files/1/0253/7911/0974/products/FA00644-Recovered-Recovered_dc679e38-2fd3-4760-a82d-3b4dd43f9b67.jpg?v=1673346634&width=600",
    },
    {
      id: "D77",
      type: "pen",
      brand: "Mart",
      title: "Whitner",
      description: "With Thinner",
      price: 670,
      src:
        "https://cdn.shopify.com/s/files/1/0253/7911/0974/products/sensacorrectionpen.jpg?v=1673351360&width=600",
    },
    {
      id: "j65",
      type: "pen",
      brand: "Panio",
      title: "Ink",
      collection: "",
      description: "Parker Pen Ink",
      price: 70,
      src:
        "https://cdn.shopify.com/s/files/1/0253/7911/0974/products/quink-parker-ink-blue-57ml.jpg?v=1674821909&width=800",
    },
    {
      id: "j717",
      type: "pen",
      brand: "Panio",
      title: "Board Marker",
      description: "White Board Marker",
      price: 70,
      src:
        "https://cdn.shopify.com/s/files/1/0253/7911/0974/products/DollarDryEraseWhiteboardMarkerBlue.jpg?v=1673339778&width=800",
    },
    {
      id: "j715",
      type: "pen",
      brand: "Panio",
      title: "",
      description: "White Board Duster",
      price: 70,
      src:
        "https://cdn.shopify.com/s/files/1/0253/7911/0974/products/6PcsPackWhiteBoardDusterDoubleSided_BestDusterforWhiteBoard_SchoolOfficeWhiteBoardDusters.jpg?v=1673355049&width=800",
    },
    {
      id: "A1",
      type: "Books",
      brand: "Conson",
      title: "SketchBooks",
      description: "Mixed Media 224Gsm",
      price: 4670,
      src:
        "https://cdn.shopify.com/s/files/1/0253/7911/0974/files/Mont_Marte_Hard_Sketchbook.jpg?v=1684739322&width=240",
      collection: "Books",
    },
    {
      id: "A2",
      type: "Books",
      brand: "Mont Marte",
      title: "SketchBooks",
      description: "Signture Sketch Book",
      price: 1270,
      src:
        "https://cdn.shopify.com/s/files/1/0253/7911/0974/files/Signature_Sketch_Book_-_A4_-_Sketchbook_-_200gsm_-_96_Sheets_-_4.jpg?v=1684741567&width=240",
      collection: "Books",
    },
 
    {
      id: "A612",
      type: "pen",
      brand: "Dux",
      title: "Power Sharpner",
      description: "Sharpner 0616B",
      price: 170,
      src:
        "https://cdn.shopify.com/s/files/1/0253/7911/0974/products/233.jpg?v=1680603796&width=800",
    },
    {
      id: "S41",
      type: "pen",
      brand: "Dhile",
      title: "Plastic Ruler",
      collection: "",
      description: "card1Sensa Plastic Ruler",
      price: 670,
      src:
        "https://cdn.shopify.com/s/files/1/0253/7911/0974/products/FA00644-Recovered-Recovered_dc679e38-2fd3-4760-a82d-3b4dd43f9b67.jpg?v=1673346634&width=600",
    },
    {
      id: "D77",
      type: "pen",
      brand: "Mart",
      title: "Whitner",
      description: "With Thinner",
      price: 670,
      src:
        "https://cdn.shopify.com/s/files/1/0253/7911/0974/products/sensacorrectionpen.jpg?v=1673351360&width=600",
    },
    {
      id: "j65",
      type: "pen",
      brand: "Panio",
      title: "Ink",
      collection: "",
      description: "Parker Pen Ink",
      price: 70,
      src:
        "https://cdn.shopify.com/s/files/1/0253/7911/0974/products/quink-parker-ink-blue-57ml.jpg?v=1674821909&width=800",
    },
    {
      id: "j717",
      type: "pen",
      brand: "Panio",
      title: "Board Marker",
      description: "White Board Marker",
      price: 70,
      src:
        "https://cdn.shopify.com/s/files/1/0253/7911/0974/products/DollarDryEraseWhiteboardMarkerBlue.jpg?v=1673339778&width=800",
    },
    {
      id: "j715",
      type: "pen",
      brand: "Panio",
      title: "",
      description: "White Board Duster",
      price: 70,
      src:
        "https://cdn.shopify.com/s/files/1/0253/7911/0974/products/6PcsPackWhiteBoardDusterDoubleSided_BestDusterforWhiteBoard_SchoolOfficeWhiteBoardDusters.jpg?v=1673355049&width=800",
    },
    {
      id: "A1",
      type: "Books",
      brand: "Conson",
      title: "SketchBooks",
      description: "Mixed Media 224Gsm",
      price: 4670,
      src:
        "https://cdn.shopify.com/s/files/1/0253/7911/0974/files/Mont_Marte_Hard_Sketchbook.jpg?v=1684739322&width=240",
      collection: "Books",
    },
    {
      id: "A2",
      type: "Books",
      brand: "Mont Marte",
      title: "SketchBooks",
      description: "Signture Sketch Book",
      price: 1270,
      src:
        "https://cdn.shopify.com/s/files/1/0253/7911/0974/files/Signature_Sketch_Book_-_A4_-_Sketchbook_-_200gsm_-_96_Sheets_-_4.jpg?v=1684741567&width=240",
      collection: "Books",
    },

  
    {
      id: "A612",
      type: "pen",
      brand: "Dux",
      title: "Power Sharpner",
      description: "Sharpner 0616B",
      price: 170,
      src:
        "https://cdn.shopify.com/s/files/1/0253/7911/0974/products/233.jpg?v=1680603796&width=800",
    },
    {
      id: "S41",
      type: "pen",
      brand: "Dhile",
      title: "Plastic Ruler",
      collection: "",
      description: "card1Sensa Plastic Ruler",
      price: 670,
      src:
        "https://cdn.shopify.com/s/files/1/0253/7911/0974/products/FA00644-Recovered-Recovered_dc679e38-2fd3-4760-a82d-3b4dd43f9b67.jpg?v=1673346634&width=600",
    },
    {
      id: "D77",
      type: "pen",
      brand: "Mart",
      title: "Whitner",
      description: "With Thinner",
      price: 670,
      src:
        "https://cdn.shopify.com/s/files/1/0253/7911/0974/products/sensacorrectionpen.jpg?v=1673351360&width=600",
    },
    {
      id: "j65",
      type: "pen",
      brand: "Panio",
      title: "Ink",
      collection: "",
      description: "Parker Pen Ink",
      price: 70,
      src:
        "https://cdn.shopify.com/s/files/1/0253/7911/0974/products/quink-parker-ink-blue-57ml.jpg?v=1674821909&width=800",
    },
    {
      id: "j717",
      type: "pen",
      brand: "Panio",
      title: "Board Marker",
      description: "White Board Marker",
      price: 70,
      src:
        "https://cdn.shopify.com/s/files/1/0253/7911/0974/products/DollarDryEraseWhiteboardMarkerBlue.jpg?v=1673339778&width=800",
    },
    {
      id: "j715",
      type: "pen",
      brand: "Panio",
      title: "",
      description: "White Board Duster",
      price: 70,
      src:
        "https://cdn.shopify.com/s/files/1/0253/7911/0974/products/6PcsPackWhiteBoardDusterDoubleSided_BestDusterforWhiteBoard_SchoolOfficeWhiteBoardDusters.jpg?v=1673355049&width=800",
    },
    {
      id: "A1",
      type: "Books",
      brand: "Conson",
      title: "SketchBooks",
      description: "Mixed Media 224Gsm",
      price: 4670,
      src:
        "https://cdn.shopify.com/s/files/1/0253/7911/0974/files/Mont_Marte_Hard_Sketchbook.jpg?v=1684739322&width=240",
      collection: "Books",
    },
    {
      id: "A2",
      type: "Books",
      brand: "Mont Marte",
      title: "SketchBooks",
      description: "Signture Sketch Book",
      price: 1270,
      src:
        "https://cdn.shopify.com/s/files/1/0253/7911/0974/products/a3sketchbook.jpg?v=1673334985&width=800",
      collection: "",
    },
    {
      id: "A3",
      type: "Books",
      brand: "Canson",
      title: "SketchBooks",
      description: "Signture Sketch Book",
      price: 1245,
      src:
        "https://cdn.shopify.com/s/files/1/0253/7911/0974/products/2_6203e2d6-580b-4c65-a8b2-d1fbcfa7032a.jpg?v=1678368896&width=800",
      collection: "",
    },
    {
      id: "G13",
      type: "Colorpaper",
      brand: "Stationery.PK",
      title: "Color Paper",
      collection: "Colorpaper",
      description: "Color China A/4",
      price: 170,
      src:
        "https://cdn.shopify.com/s/files/1/0253/7911/0974/products/c1.jpg?v=1673337415&width=800",
    },
    {
      id: "G12",
      type: "Colorpaper",
      brand: "Stationery.PK",
      title: "Color Paper",
      collection: "",
      description: "Cellophone Paper",
      price: 30,
      src:
        "https://cdn.shopify.com/s/files/1/0253/7911/0974/products/colourgudikaghaz.jpg?v=1673354484&width=600",
    },
    {
      id: "G11",
      type: "Colorpaper",
      brand: "Stationery.PK",
      title: "Color Paper",
      collection: "",
      description: "Tissue Paper",
      price: 20,
      src:
        "https://cdn.shopify.com/s/files/1/0253/7911/0974/products/tissuepaperwhitesheet.jpg?v=1673354501&width=600",
    },
    {
      id: "B1",
      type: "Lunch Box",
      brand: "Stationery.Pk",
      title: "Lunch-Box",
      collection: "Lunch Box",
      description: "Lunch Box",
      price: 770,
      src:
        "https://cdn.shopify.com/s/files/1/0253/7911/0974/products/ST02931.jpg?v=1673344845&width=600",
    },
    {
      id: "B2",
      type: "Lunch Box",
      brand: "jeely",
      title: "Lunch-Box",
      collection: "",
      description: "Lunch Box saw-0",
      price: 1430,
      src:
        "https://cdn.shopify.com/s/files/1/0253/7911/0974/products/ST00418.jpg?v=1673344577&width=600",
    },
    {
      id: "B3",
      type: "Lunch Box",
      brand: "jeely",
      title: "Lunch-Box",
      collection: "",
      description: "Lunch Box Clipper",
      price: 570,
      src:
        "https://cdn.shopify.com/s/files/1/0253/7911/0974/products/ST00393.jpg?v=1673344756&width=600",
    },
    {
      id: "p22",
      type: "Brushes",
      brand: "Mont Marte",
      title: "Round Brushes",
      collection: "Brushes",
      description: "Mont Marte Round Brush",
      price: 170,
      src:
        "https://cdn.shopify.com/s/files/1/0253/7911/0974/products/roundbrushes-1.jpg?v=1673339082&width=800",
    },
    {
      id: "p21",
      type: "Brushes",
      brand: "Mont Marte",
      title: "Flat Brushes",
      collection: "",
      description: "Mont Marte Flat Brush",
      price: 140,
      src:
        "https://cdn.shopify.com/s/files/1/0253/7911/0974/products/flatbrushes-1.jpg?v=1673338751&width=800",
    },
    {
      id: "p23",
      type: "Brushes",
      brand: "Mont Marte",
      title: "Fan Brushes",
      collection: "",
      description: "Mont Marte Fan Brush",
      price: 180,
      src:
        "https://cdn.shopify.com/s/files/1/0253/7911/0974/products/fanbrushes-1.jpg?v=1673339392&width=800",
    },
      {
        id: "p24",
        type: "Brushes",
        brand: "Mont Marte",
        title: "Brushes",
        collection: "",
        description: "Marie's Mini Detailing",
        price: 1550,
        src: "https://cdn.shopify.com/s/files/1/0253/7911/0974/products/paintpalette_df841c5e-90ee-4761-8cee-df601481ff4f.jpg?v=1679910498&width=800",
      },
      {
        id: "HX 1",
        type: "Desk",
        brand: "Panio",
        title: "Desk Organizer",
        collection: "Desk",
        description: "Wooden Desk",
        price: 2600,
        src: "https://cdn.shopify.com/s/files/1/0253/7911/0974/products/WoodenDeskOrganizerPenHolders.jpg?v=1673355506&width=800",
      },
      {
        id: "HX 2",
        type: "Desk",
        brand: "Panio",
        title: "Desk Organizer",
        collection: "",
        description: "table set",
        price: 4100,
        src: "https://cdn.shopify.com/s/files/1/0253/7911/0974/products/WoodenDeskOrganizer1037.jpg?v=1675327743&width=800",
      },
      {
        id: "HX 3",
        type: "Desk",
        brand: "Panio",
        title: "Desk Organizer",
        collection: "",
        description: "Senator Wooden Table",
        price: 9150,
        src: "https://cdn.shopify.com/s/files/1/0253/7911/0974/products/ST01926.jpg?v=1673355148&width=600",
      },
    ];
    
    module.exports = products;
    
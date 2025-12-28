export interface Surgery {
  id: string;
  title: string;
  titleHi: string;
  url: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  titleHi: string;
  icon: string;
  surgeries: Surgery[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'joint-replacement',
    title: 'Joint Replacement',
    titleHi: 'जोड़ प्रतिस्थापन',
    icon: 'joint',
    surgeries: [
      {
        id: 'total-knee-replacement',
        title: 'Total Knee Replacement',
        titleHi: 'पूर्ण घुटना प्रतिस्थापन',
        url: '/surgeries/joint-replacement/total-knee-replacement'
      },
      {
        id: 'partial-knee-replacement',
        title: 'Partial Knee Replacement',
        titleHi: 'आंशिक घुटना प्रतिस्थापन',
        url: '/surgeries/joint-replacement/partial-knee-replacement'
      },
      {
        id: 'knee-revision-surgery',
        title: 'Knee Revision Surgery',
        titleHi: 'घुटना संशोधन सर्जरी',
        url: '/surgeries/joint-replacement/knee-revision-surgery'
      },
      {
        id: 'bilateral-knee-replacement',
        title: 'Bilateral Knee Replacement',
        titleHi: 'द्विपक्षीय घुटना प्रतिस्थापन',
        url: '/surgeries/joint-replacement/bilateral-knee-replacement'
      },
      {
        id: 'robotic-knee-replacement',
        title: 'Robotic Knee Replacement',
        titleHi: 'रोबोटिक घुटना प्रतिस्थापन',
        url: '/surgeries/joint-replacement/robotic-knee-replacement'
      },
      {
        id: 'total-hip-replacement',
        title: 'Total Hip Replacement',
        titleHi: 'पूर्ण कूल्हा प्रतिस्थापन',
        url: '/surgeries/joint-replacement/total-hip-replacement'
      },
      {
        id: 'partial-hip-replacement',
        title: 'Partial Hip Replacement',
        titleHi: 'आंशिक कूल्हा प्रतिस्थापन',
        url: '/surgeries/joint-replacement/partial-hip-replacement'
      },
      {
        id: 'hip-revision-surgery',
        title: 'Hip Revision Surgery',
        titleHi: 'कूल्हा संशोधन सर्जरी',
        url: '/surgeries/joint-replacement/hip-revision-surgery'
      },
      {
        id: 'hip-resurfacing',
        title: 'Hip Resurfacing',
        titleHi: 'कूल्हा रीसर्फेसिंग',
        url: '/surgeries/joint-replacement/hip-resurfacing'
      },
      {
        id: 'shoulder-replacement',
        title: 'Shoulder Replacement',
        titleHi: 'कंधा प्रतिस्थापन',
        url: '/surgeries/joint-replacement/shoulder-replacement'
      },
      {
        id: 'reverse-shoulder-replacement',
        title: 'Reverse Shoulder Replacement',
        titleHi: 'रिवर्स कंधा प्रतिस्थापन',
        url: '/surgeries/joint-replacement/reverse-shoulder-replacement'
      },
      {
        id: 'elbow-replacement',
        title: 'Elbow Replacement',
        titleHi: 'कोहनी प्रतिस्थापन',
        url: '/surgeries/joint-replacement/elbow-replacement'
      },
      {
        id: 'ankle-replacement',
        title: 'Ankle Replacement',
        titleHi: 'टखना प्रतिस्थापन',
        url: '/surgeries/joint-replacement/ankle-replacement'
      },
      {
        id: 'wrist-replacement',
        title: 'Wrist Replacement',
        titleHi: 'कलाई प्रतिस्थापन',
        url: '/surgeries/joint-replacement/wrist-replacement'
      },
      {
        id: 'finger-joint-replacement',
        title: 'Finger Joint Replacement',
        titleHi: 'उंगली जोड़ प्रतिस्थापन',
        url: '/surgeries/joint-replacement/finger-joint-replacement'
      }
    ]
  },
  {
    id: 'spine-surgery',
    title: 'Spine Surgery',
    titleHi: 'रीढ़ की सर्जरी',
    icon: 'spine',
    surgeries: [
      {
        id: 'lumbar-fusion',
        title: 'Lumbar Spinal Fusion',
        titleHi: 'काठ का रीढ़ संलयन',
        url: '/surgeries/spine-surgery/lumbar-fusion'
      },
      {
        id: 'cervical-fusion',
        title: 'Cervical Spinal Fusion',
        titleHi: 'ग्रीवा रीढ़ संलयन',
        url: '/surgeries/spine-surgery/cervical-fusion'
      },
      {
        id: 'discectomy',
        title: 'Discectomy Surgery',
        titleHi: 'डिस्केक्टॉमी सर्जरी',
        url: '/surgeries/spine-surgery/discectomy'
      },
      {
        id: 'microdiscectomy',
        title: 'Microdiscectomy',
        titleHi: 'माइक्रोडिस्केक्टॉमी',
        url: '/surgeries/spine-surgery/microdiscectomy'
      },
      {
        id: 'laminectomy',
        title: 'Laminectomy Surgery',
        titleHi: 'लैमिनेक्टमी सर्जरी',
        url: '/surgeries/spine-surgery/laminectomy'
      },
      {
        id: 'foraminotomy',
        title: 'Foraminotomy',
        titleHi: 'फोरामिनोटॉमी',
        url: '/surgeries/spine-surgery/foraminotomy'
      },
      {
        id: 'spinal-decompression',
        title: 'Spinal Decompression',
        titleHi: 'रीढ़ की हड्डी विसंपीड़न',
        url: '/surgeries/spine-surgery/spinal-decompression'
      },
      {
        id: 'scoliosis-correction',
        title: 'Scoliosis Correction Surgery',
        titleHi: 'स्कोलियोसिस सुधार सर्जरी',
        url: '/surgeries/spine-surgery/scoliosis-correction'
      },
      {
        id: 'kyphoplasty',
        title: 'Kyphoplasty',
        titleHi: 'काइफोप्लास्टी',
        url: '/surgeries/spine-surgery/kyphoplasty'
      },
      {
        id: 'vertebroplasty',
        title: 'Vertebroplasty',
        titleHi: 'वर्टेब्रोप्लास्टी',
        url: '/surgeries/spine-surgery/vertebroplasty'
      },
      {
        id: 'artificial-disc-replacement',
        title: 'Artificial Disc Replacement',
        titleHi: 'कृत्रिम डिस्क प्रतिस्थापन',
        url: '/surgeries/spine-surgery/artificial-disc-replacement'
      },
      {
        id: 'minimally-invasive-spine',
        title: 'Minimally Invasive Spine Surgery',
        titleHi: 'न्यूनतम आक्रामक रीढ़ सर्जरी',
        url: '/surgeries/spine-surgery/minimally-invasive-spine'
      },
      {
        id: 'spinal-tumor-removal',
        title: 'Spinal Tumor Removal',
        titleHi: 'रीढ़ ट्यूमर निकालना',
        url: '/surgeries/spine-surgery/spinal-tumor-removal'
      },
      {
        id: 'spinal-cord-decompression',
        title: 'Spinal Cord Decompression',
        titleHi: 'रीढ़ की हड्डी विसंपीड़न',
        url: '/surgeries/spine-surgery/spinal-cord-decompression'
      },
      {
        id: 'thoracic-spine-surgery',
        title: 'Thoracic Spine Surgery',
        titleHi: 'वक्ष रीढ़ सर्जरी',
        url: '/surgeries/spine-surgery/thoracic-spine-surgery'
      }
    ]
  },
  {
    id: 'sports-medicine',
    title: 'Sports Medicine',
    titleHi: 'खेल चिकित्सा',
    icon: 'sports',
    surgeries: [
      {
        id: 'acl-reconstruction',
        title: 'ACL Reconstruction',
        titleHi: 'एसीएल पुनर्निर्माण',
        url: '/surgeries/sports-medicine/acl-reconstruction'
      },
      {
        id: 'pcl-reconstruction',
        title: 'PCL Reconstruction',
        titleHi: 'पीसीएल पुनर्निर्माण',
        url: '/surgeries/sports-medicine/pcl-reconstruction'
      },
      {
        id: 'meniscus-repair',
        title: 'Meniscus Repair Surgery',
        titleHi: 'मेनिस्कस मरम्मत सर्जरी',
        url: '/surgeries/sports-medicine/meniscus-repair'
      },
      {
        id: 'rotator-cuff-repair',
        title: 'Rotator Cuff Repair',
        titleHi: 'रोटेटर कफ मरम्मत',
        url: '/surgeries/sports-medicine/rotator-cuff-repair'
      },
      {
        id: 'shoulder-labral-repair',
        title: 'Shoulder Labral Repair',
        titleHi: 'कंधे की लैब्रल मरम्मत',
        url: '/surgeries/sports-medicine/shoulder-labral-repair'
      },
      {
        id: 'tennis-elbow-surgery',
        title: 'Tennis Elbow Surgery',
        titleHi: 'टेनिस एल्बो सर्जरी',
        url: '/surgeries/sports-medicine/tennis-elbow-surgery'
      },
      {
        id: 'achilles-tendon-repair',
        title: 'Achilles Tendon Repair',
        titleHi: 'एच्लीस टेंडन मरम्मत',
        url: '/surgeries/sports-medicine/achilles-tendon-repair'
      },
      {
        id: 'ankle-ligament-reconstruction',
        title: 'Ankle Ligament Reconstruction',
        titleHi: 'टखना लिगामेंट पुनर्निर्माण',
        url: '/surgeries/sports-medicine/ankle-ligament-reconstruction'
      },
      {
        id: 'hamstring-repair',
        title: 'Hamstring Repair Surgery',
        titleHi: 'हैमस्ट्रिंग मरम्मत सर्जरी',
        url: '/surgeries/sports-medicine/hamstring-repair'
      },
      {
        id: 'cartilage-restoration',
        title: 'Cartilage Restoration',
        titleHi: 'उपास्थि बहाली',
        url: '/surgeries/sports-medicine/cartilage-restoration'
      },
      {
        id: 'shoulder-instability-surgery',
        title: 'Shoulder Instability Surgery',
        titleHi: 'कंधा अस्थिरता सर्जरी',
        url: '/surgeries/sports-medicine/shoulder-instability-surgery'
      },
      {
        id: 'patellar-tendon-repair',
        title: 'Patellar Tendon Repair',
        titleHi: 'पटेलर टेंडन मरम्मत',
        url: '/surgeries/sports-medicine/patellar-tendon-repair'
      },
      {
        id: 'biceps-tendon-repair',
        title: 'Biceps Tendon Repair',
        titleHi: 'बाइसेप्स टेंडन मरम्मत',
        url: '/surgeries/sports-medicine/biceps-tendon-repair'
      },
      {
        id: 'mpfl-reconstruction',
        title: 'MPFL Reconstruction',
        titleHi: 'एमपीएफएल पुनर्निर्माण',
        url: '/surgeries/sports-medicine/mpfl-reconstruction'
      },
      {
        id: 'osteochondral-grafting',
        title: 'Osteochondral Grafting',
        titleHi: 'ऑस्टियोकॉन्ड्रल ग्राफ्टिंग',
        url: '/surgeries/sports-medicine/osteochondral-grafting'
      }
    ]
  },
  {
    id: 'trauma-care',
    title: 'Trauma & Fracture Care',
    titleHi: 'आघात और फ्रैक्चर देखभाल',
    icon: 'trauma',
    surgeries: [
      {
        id: 'femur-fracture-fixation',
        title: 'Femur Fracture Fixation',
        titleHi: 'फीमर फ्रैक्चर निर्धारण',
        url: '/surgeries/trauma-care/femur-fracture-fixation'
      },
      {
        id: 'tibia-fracture-fixation',
        title: 'Tibia Fracture Fixation',
        titleHi: 'टिबिया फ्रैक्चर निर्धारण',
        url: '/surgeries/trauma-care/tibia-fracture-fixation'
      },
      {
        id: 'ankle-fracture-surgery',
        title: 'Ankle Fracture Surgery',
        titleHi: 'टखना फ्रैक्चर सर्जरी',
        url: '/surgeries/trauma-care/ankle-fracture-surgery'
      },
      {
        id: 'wrist-fracture-surgery',
        title: 'Wrist Fracture Surgery',
        titleHi: 'कलाई फ्रैक्चर सर्जरी',
        url: '/surgeries/trauma-care/wrist-fracture-surgery'
      },
      {
        id: 'hip-fracture-surgery',
        title: 'Hip Fracture Surgery',
        titleHi: 'कूल्हे की हड्डी टूटना सर्जरी',
        url: '/surgeries/trauma-care/hip-fracture-surgery'
      },
      {
        id: 'pelvic-fracture-fixation',
        title: 'Pelvic Fracture Fixation',
        titleHi: 'श्रोणि फ्रैक्चर निर्धारण',
        url: '/surgeries/trauma-care/pelvic-fracture-fixation'
      },
      {
        id: 'clavicle-fracture-surgery',
        title: 'Clavicle Fracture Surgery',
        titleHi: 'हंसली फ्रैक्चर सर्जरी',
        url: '/surgeries/trauma-care/clavicle-fracture-surgery'
      },
      {
        id: 'humerus-fracture-fixation',
        title: 'Humerus Fracture Fixation',
        titleHi: 'ह्यूमरस फ्रैक्चर निर्धारण',
        url: '/surgeries/trauma-care/humerus-fracture-fixation'
      },
      {
        id: 'radius-ulna-fracture',
        title: 'Radius-Ulna Fracture Surgery',
        titleHi: 'त्रिज्या-उल्ना फ्रैक्चर सर्जरी',
        url: '/surgeries/trauma-care/radius-ulna-fracture'
      },
      {
        id: 'open-fracture-management',
        title: 'Open Fracture Management',
        titleHi: 'खुला फ्रैक्चर प्रबंधन',
        url: '/surgeries/trauma-care/open-fracture-management'
      },
      {
        id: 'polytrauma-management',
        title: 'Polytrauma Management',
        titleHi: 'पॉलीट्रॉमा प्रबंधन',
        url: '/surgeries/trauma-care/polytrauma-management'
      },
      {
        id: 'intramedullary-nailing',
        title: 'Intramedullary Nailing',
        titleHi: 'इंट्रामेडुलरी नेलिंग',
        url: '/surgeries/trauma-care/intramedullary-nailing'
      },
      {
        id: 'external-fixation',
        title: 'External Fixation Surgery',
        titleHi: 'बाह्य निर्धारण सर्जरी',
        url: '/surgeries/trauma-care/external-fixation'
      },
      {
        id: 'non-union-fracture-treatment',
        title: 'Non-Union Fracture Treatment',
        titleHi: 'गैर-संघ फ्रैक्चर उपचार',
        url: '/surgeries/trauma-care/non-union-fracture-treatment'
      },
      {
        id: 'malunion-correction',
        title: 'Malunion Correction Surgery',
        titleHi: 'मैलूनियन सुधार सर्जरी',
        url: '/surgeries/trauma-care/malunion-correction'
      }
    ]
  },
  {
    id: 'pediatric-ortho',
    title: 'Pediatric Orthopaedics',
    titleHi: 'बाल हड्डी रोग',
    icon: 'pediatric',
    surgeries: [
      {
        id: 'clubfoot-correction',
        title: 'Clubfoot Correction',
        titleHi: 'क्लबफुट सुधार',
        url: '/surgeries/pediatric-ortho/clubfoot-correction'
      },
      {
        id: 'ddh-treatment',
        title: 'DDH Treatment (Hip Dysplasia)',
        titleHi: 'डीडीएच उपचार (कूल्हा डिसप्लेसिया)',
        url: '/surgeries/pediatric-ortho/ddh-treatment'
      },
      {
        id: 'bow-legs-correction',
        title: 'Bow Legs Correction',
        titleHi: 'धनुषाकार पैर सुधार',
        url: '/surgeries/pediatric-ortho/bow-legs-correction'
      },
      {
        id: 'knock-knees-correction',
        title: 'Knock Knees Correction',
        titleHi: 'घुटने टकराना सुधार',
        url: '/surgeries/pediatric-ortho/knock-knees-correction'
      },
      {
        id: 'limb-length-discrepancy',
        title: 'Limb Length Discrepancy Surgery',
        titleHi: 'अंग लंबाई विसंगति सर्जरी',
        url: '/surgeries/pediatric-ortho/limb-length-discrepancy'
      },
      {
        id: 'scoliosis-pediatric',
        title: 'Pediatric Scoliosis Surgery',
        titleHi: 'बाल स्कोलियोसिस सर्जरी',
        url: '/surgeries/pediatric-ortho/scoliosis-pediatric'
      },
      {
        id: 'cerebral-palsy-surgery',
        title: 'Cerebral Palsy Surgery',
        titleHi: 'सेरेब्रल पाल्सी सर्जरी',
        url: '/surgeries/pediatric-ortho/cerebral-palsy-surgery'
      },
      {
        id: 'polydactyly-surgery',
        title: 'Polydactyly Surgery (Extra Fingers/Toes)',
        titleHi: 'पॉलीडैक्टली सर्जरी (अतिरिक्त उंगलियां)',
        url: '/surgeries/pediatric-ortho/polydactyly-surgery'
      },
      {
        id: 'syndactyly-surgery',
        title: 'Syndactyly Surgery (Webbed Fingers)',
        titleHi: 'सिंडैक्टली सर्जरी (जालीदार उंगलियां)',
        url: '/surgeries/pediatric-ortho/syndactyly-surgery'
      },
      {
        id: 'perthes-disease-treatment',
        title: 'Perthes Disease Treatment',
        titleHi: 'पर्थेस रोग उपचार',
        url: '/surgeries/pediatric-ortho/perthes-disease-treatment'
      },
      {
        id: 'slipped-capital-femoral',
        title: 'Slipped Capital Femoral Epiphysis',
        titleHi: 'स्लिप्ड कैपिटल फेमोरल एपिफिसिस',
        url: '/surgeries/pediatric-ortho/slipped-capital-femoral'
      },
      {
        id: 'osteogenesis-imperfecta',
        title: 'Osteogenesis Imperfecta Treatment',
        titleHi: 'ऑस्टियोजेनेसिस इम्परफेक्टा उपचार',
        url: '/surgeries/pediatric-ortho/osteogenesis-imperfecta'
      },
      {
        id: 'rickets-correction',
        title: 'Rickets Correction Surgery',
        titleHi: 'रिकेट्स सुधार सर्जरी',
        url: '/surgeries/pediatric-ortho/rickets-correction'
      },
      {
        id: 'pediatric-fractures',
        title: 'Pediatric Fractures Treatment',
        titleHi: 'बाल फ्रैक्चर उपचार',
        url: '/surgeries/pediatric-ortho/pediatric-fractures'
      },
      {
        id: 'torticollis-surgery',
        title: 'Torticollis Surgery',
        titleHi: 'टॉर्टिकोलिस सर्जरी',
        url: '/surgeries/pediatric-ortho/torticollis-surgery'
      }
    ]
  },
  {
    id: 'arthroscopy',
    title: 'Arthroscopy',
    titleHi: 'आर्थ्रोस्कोपी',
    icon: 'arthroscopy',
    surgeries: [
      {
        id: 'knee-arthroscopy',
        title: 'Knee Arthroscopy',
        titleHi: 'घुटना आर्थ्रोस्कोपी',
        url: '/surgeries/arthroscopy/knee-arthroscopy'
      },
      {
        id: 'shoulder-arthroscopy',
        title: 'Shoulder Arthroscopy',
        titleHi: 'कंधा आर्थ्रोस्कोपी',
        url: '/surgeries/arthroscopy/shoulder-arthroscopy'
      },
      {
        id: 'hip-arthroscopy',
        title: 'Hip Arthroscopy',
        titleHi: 'कूल्हा आर्थ्रोस्कोपी',
        url: '/surgeries/arthroscopy/hip-arthroscopy'
      },
      {
        id: 'ankle-arthroscopy',
        title: 'Ankle Arthroscopy',
        titleHi: 'टखना आर्थ्रोस्कोपी',
        url: '/surgeries/arthroscopy/ankle-arthroscopy'
      },
      {
        id: 'elbow-arthroscopy',
        title: 'Elbow Arthroscopy',
        titleHi: 'कोहनी आर्थ्रोस्कोपी',
        url: '/surgeries/arthroscopy/elbow-arthroscopy'
      },
      {
        id: 'wrist-arthroscopy',
        title: 'Wrist Arthroscopy',
        titleHi: 'कलाई आर्थ्रोस्कोपी',
        url: '/surgeries/arthroscopy/wrist-arthroscopy'
      },
      {
        id: 'synovectomy',
        title: 'Arthroscopic Synovectomy',
        titleHi: 'आर्थ्रोस्कोपिक सिनोवेक्टमी',
        url: '/surgeries/arthroscopy/synovectomy'
      },
      {
        id: 'loose-body-removal',
        title: 'Loose Body Removal',
        titleHi: 'ढीले शरीर को हटाना',
        url: '/surgeries/arthroscopy/loose-body-removal'
      },
      {
        id: 'plica-excision',
        title: 'Plica Excision',
        titleHi: 'प्लिका उच्छेदन',
        url: '/surgeries/arthroscopy/plica-excision'
      },
      {
        id: 'chondroplasty',
        title: 'Chondroplasty',
        titleHi: 'कोंड्रोप्लास्टी',
        url: '/surgeries/arthroscopy/chondroplasty'
      },
      {
        id: 'debridement-arthroscopy',
        title: 'Arthroscopic Debridement',
        titleHi: 'आर्थ्रोस्कोपिक डेब्रिडमेंट',
        url: '/surgeries/arthroscopy/debridement-arthroscopy'
      },
      {
        id: 'microfracture-surgery',
        title: 'Microfracture Surgery',
        titleHi: 'माइक्रोफ्रैक्चर सर्जरी',
        url: '/surgeries/arthroscopy/microfracture-surgery'
      },
      {
        id: 'labral-debridement',
        title: 'Labral Debridement',
        titleHi: 'लैब्रल डेब्रिडमेंट',
        url: '/surgeries/arthroscopy/labral-debridement'
      },
      {
        id: 'arthroscopic-biopsy',
        title: 'Arthroscopic Biopsy',
        titleHi: 'आर्थ्रोस्कोपिक बायोप्सी',
        url: '/surgeries/arthroscopy/arthroscopic-biopsy'
      },
      {
        id: 'capsular-release',
        title: 'Capsular Release Surgery',
        titleHi: 'कैप्सुलर रिलीज सर्जरी',
        url: '/surgeries/arthroscopy/capsular-release'
      }
    ]
  }
];

// Helper function to get surgery by slug
export function getSurgeryBySlug(slug: string): Surgery | undefined {
  for (const category of menuCategories) {
    const surgery = category.surgeries.find(s => s.id === slug);
    if (surgery) return surgery;
  }
  return undefined;
}

// Helper function to get category by id
export function getCategoryById(id: string): MenuCategory | undefined {
  return menuCategories.find(cat => cat.id === id);
}

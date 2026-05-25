// Add or edit publications here. Each entry renders as a publication card.
// Categories are used for the filter chips on the Research page.
//
// Optional `image` field: a hosted URL (or /something.jpg in /public).
// If empty, a tasteful venue-themed placeholder is shown instead.

import { PublicationCategory, type Publication } from "../lib/types";

export const publications: Publication[] = [
  {
    title:
      "To Sink or Not to Sink: Visual Information Pathways in Large Vision-Language Models",
    authors:
      "Jiayun Luo, Wan-Cyuan Fan, Lyuyang Wang, Xiangteng He, Tanzila Rahman, Purang Abolmaesumi, Leonid Sigal",
    venue: "International Conference on Learning Representations",
    venueShort: "ICLR",
    year: 2025,
    category: PublicationCategory.VisionLanguage,
    image: "https://lh3.googleusercontent.com/sitesv/AA5AbUAKpys_3WLmUBnT5rFuey0vMiIfmkyUMArdmwk22YNIKiDoC7IIFY-LMlDa4jsiTc-J4pfnfxtCY2AYhrPk48AWFL46xnFFsczpnPf5bL6PQZst99kuFaxJ3b8Y8vonPZmoI-QRFwZnL-s08OC8NJFUOgEp7v-En3Fjk09A_zRefTZcHf6OA9E2zCg99aILZSgy-aJCv_QiGLrUjc-lcPCktw2plt3wcg8w-_E=w1280",
    links: {
      arXiv: "https://arxiv.org/abs/2510.08510",
    },
  },
  {
    title: "MMFactory: A Universal Solution Search Engine for Vision-Language Tasks. (under review)",
    authors: "Wan-Cyuan Fan, Tanzila Rahman, Leonid Sigal",
    venue: "UBC, Vector Institute for AI, CIFAR AI Chair",
    venueShort: "UBC",
    year: 2025,
    category: PublicationCategory.VisionLanguage,
    image: "images/MMFactory.png",
    links: {
      Project: "https://davidhalladay.github.io/mmfactory_demo/",
    },
  },
  {
    title: "Visual Concept-driven Image Generation with Text-to-Image Diffusion Model",
    authors: "Tanzila Rahman, Shweta Mahajan, Hsin-Ying Lee, Jian Ren, Sergey Tulyakov, Leonid Sigal",
    venue: "Conference on Robot Vision",
    venueShort: "CRV",
    year: 2025,
    category: PublicationCategory.GenerativeAI,
    image: "images/visual-concept.png",
    links: {
      arXiv: "https://arxiv.org/pdf/2402.11487",
    },
  },
  {
    title:
      "Prompting Hard or Hardly Prompting: Prompt Inversion for Text-to-Image Diffusion Models",
    authors: "Shweta Mahajan, Tanzila Rahman, Kwang Moo Yi, Leonid Sigal",
    venue: "Conference on Computer Vision and Pattern Recognition",
    venueShort: "CVPR",
    year: 2024,
    category: PublicationCategory.GenerativeAI,
    image: "https://s-mahajan.github.io/images/ph2p_2023.png",
    links: {
      PDF: "https://openaccess.thecvf.com/content/CVPR2024/papers/Mahajan_Prompting_Hard_or_Hardly_Prompting_Prompt_Inversion_for_Text-to-Image_Diffusion_CVPR_2024_paper.pdf",
    },
  },
  {
    title:
      "Make-A-Story: Visual Memory Conditioned Consistent Story Generation",
    authors:
      "Tanzila Rahman, Hsin-Ying Lee, Jian Ren, Sergey Tulyakov, Shweta Mahajan, Leonid Sigal",
    venue: "Conference on Computer Vision and Pattern Recognition",
    venueShort: "CVPR",
    year: 2023,
    category: PublicationCategory.GenerativeAI,
    image: "https://s-mahajan.github.io/images/cvpr_2023.png",
    links: {
      PDF: "https://openaccess.thecvf.com/content/CVPR2023/papers/Rahman_Make-a-Story_Visual_Memory_Conditioned_Consistent_Story_Generation_CVPR_2023_paper.pdf",
      Video: "https://www.youtube.com/watch?v=BXZ7LAg1sP8&t=58s",
    },
  },
  {
    title: "TriBERT: Human-centric Audio-visual Representation Learning",
    authors: "Tanzila Rahman, Mengyu Yang, Leonid Sigal",
    venue: "Neural Information Processing Systems",
    venueShort: "NeurIPS",
    year: 2021,
    category: PublicationCategory.MultimodalLearning,
    image: "images/TriBERT.png",
    links: {
      arXiv: "https://arxiv.org/pdf/2110.13412",
    },
  },
  {
    title:
      "Weakly-Supervised Audio-Visual Sound Source Detection and Separation",
    authors: "Tanzila Rahman, Leonid Sigal",
    venue: "IEEE International Conference on Multimedia and Expo",
    venueShort: "ICME (Oral presentation)",
    year: 2021,
    category: PublicationCategory.MultimodalLearning,
    image: "images/Weakly-Supervised.png",
    links: {
      arXiv: "https://arxiv.org/abs/2104.02606",
      Video: "https://www.youtube.com/watch?v=ep6vLty85NU",
    },
  },
  {
    title: "An Improved Attention for Visual Question Answering",
    authors: "Tanzila Rahman, Shih-Han Chou, Leonid Sigal, Giuseppe Carenini",
    venue: "4th Multimodal Learning and Applications Workshop (in conjunction with CVPR)",
    venueShort: "CVPR Workshop",
    year: 2021,
    category: PublicationCategory.VisionLanguage,
    image: "images/Visual-Question-Answering.png",
    links: {
      PDF: "https://openaccess.thecvf.com/content/CVPR2021W/MULA/papers/Rahman_An_Improved_Attention_for_Visual_Question_Answering_CVPRW_2021_paper.pdf",
      Video: "https://www.youtube.com/watch?v=5XfwBAxL9SQ",
    },
  },
  {
    title:
      "Watch, Listen and Tell: Multi-modal Weakly Supervised Dense Event Captioning",
    authors: "Tanzila Rahman, Bicheng Xu, Leonid Sigal",
    venue: "IEEE/CVF International Conference on Computer Vision",
    venueShort: "ICCV",
    year: 2019,
    category: PublicationCategory.MultimodalLearning,
    image: "images/Watch-Listen-and-Tell.png",
    links: {
      arXiv: "https://arxiv.org/abs/1909.09944",
    },
  },
  {
    title:
      "Video-based Person Re-identification using Refined Attention Networks",
    authors: "Tanzila Rahman, Mrigank Rochan, Yang Wang",
    venue: "IEEE International Conference on Advanced Video and Signal-based Surveillance",
    venueShort: "AVSS",
    year: 2019,
    category: PublicationCategory.ComputerVision,
    image: "images/Video-based-Person-Re-identification.png",
    links: {
      PDF: "https://www.cs.umanitoba.ca/~ywang/papers/avss19_refine.pdf",
    },
  },
  {
    title:
    "Non-local Attentive Temporal Network for Video-Based Person Re-identification",
    authors: "Shuangqun Rao, Pengfei Cao, Tanzila Rahman, Mrigank Rochan, Yang Wang",
    venue: "IEEE International Conference on Advanced Video and Signal-based Surveillance",
    venueShort: "AVSS",
    year: 2019,
    category: PublicationCategory.ComputerVision,
    image: "images/Non-local-Attentive.png",
    links: {
      PDF: "https://www.cs.umanitoba.ca/~ywang/papers/avss19_nonlocal.pdf"
    },
  },
  {
    title: "Convolutional Temporal Attention Model for Video-Based Person Re-identification",
    authors: "Tanzila Rahman, Mrigank Rochan, Yang Wang",
    venue: "IEEE International Conference on Multimedia and Expo",
    venueShort: "ICME",
    year: 2019,
    category: PublicationCategory.ComputerVision,
    image: "https://mrochan.github.io/images/icme19_img.png",
    links: {
      arXiv: "https://arxiv.org/abs/1904.04492",
    },
  },
  {
    title:
      "Membership Inference Attack against Differentially Private Deep Learning Model",
    authors:
      "Md Atiqur Rahman, Tanzila Rahman, Robert Laganière, Noman Mohammed, Yang Wang",
    venue: "Transactions on Data Privacy (61-79)",
    venueShort: "TDP",
    year: 2018,
    category: PublicationCategory.MachineLearning,
    image: "images/Membership-Inference-Attack.png",
    links: {
      PDF: "http://www.tdp.cat/issues16/tdp.a289a17.pdf",
    },
  },
  {
    title: "Person Re-Identification by Localizing Discriminative Regions",
    authors: "Tanzila Rahman, Mrigank Rochan, Yang Wang",
    venue: "The 28th British Machine Vision Conference",
    venueShort: "BMVC",
    year: 2017,
    category: PublicationCategory.ComputerVision,
    image: "https://mrochan.github.io/images/bmvc17_personid_img.png",
    links: {
      PDF: "http://www.cs.umanitoba.ca/~ywang/papers/bmvc17_personid.pdf",
    },
  },
];

export const publicationCategories = [
  "All",
  PublicationCategory.GenerativeAI,
  PublicationCategory.MultimodalLearning,
  PublicationCategory.VisionLanguage,
  PublicationCategory.ComputerVision,
  PublicationCategory.MachineLearning,
  PublicationCategory.Other,
];

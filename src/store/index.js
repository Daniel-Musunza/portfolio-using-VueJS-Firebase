import { createStore } from 'vuex';

import {auth, db} from "../firebase";
import {setDoc, getDocs, doc, getDoc, getFirestore, collection} from 'firebase/firestore';

export default createStore({
  state () {
    return {
      // auth state
      user: {
        loggedIn: false,
        data: null
      },
      profileAdmin: null,
      profileEmail: null,
      profileFirstName: null,
      profileLastName: null,
             
      profileId: null,
      profileInitials: null,

            // orders state
            
            experience: [],
            postloaded: null,
            duration: "",
            role: "",
            responsibility: "",
            company: "",
            
            skills: [],
            percentage: "",
            name: "",

            websites: [],
            webPhotoName: "",
            webPhotoFileURL: true,
            link: "",

            designs: [],
            designPhotoName: "",
            designPhotoFileURL: true,

            full_stack_guide: [],
            title: "",
            content: true,
            currentTopic: null,
    }
  },
  getters: {
    // order getters
experience: state => state.experience,
skills: state => state.skills,
websites: state => state.websites,
designs: state => state.designs,
full_stack_guide: state => state.full_stack_guide,

user(state){
  return state.user
},
fullName(state) {
  return `${state.firstName} ${state.lastName}`
},
  },
  mutations: {
      // auth mutations
      updateUser(state, payload){
        state.user = payload;
    },
    setProfileAdmin(state, payload) {
        state.profileAdmin = payload;
        console.log(state.profileAdmin);
    },
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },

           
            setProfileInfo(state, payload) {
              if (payload) {
                state.profileId = payload.uid;
                state.profileEmail = payload.email;
                state.profileFirstName = payload.firstName;
                state.profileLastName = payload.lastName;
                state.profileInitials = payload.initials;
              } else {
                state.profileEmail = null;
                state.profileFirstName = null;
                state.profileLastName = null;
                state.profileInitials = null;
              }
            },
    setProfileInitials (state){
        state.profileInitials = state.profileFirstName.match(/(\b\S)?/g).join("")+ state.profileLastName.match(/(\b\S)?/g).join("");
    },
    changeFirstName(state, payload){
        state.profileFirstName = payload
    },
    changeLastName(state, payload){
        state.profileLastName = payload
    },

    changeInitials(state, payload){
      state.profileInitials = payload
  },
  setExperienceState(state, payload) {
          state.experience= payload;
          
        },
        setSkillsState(state, payload) {
          state.skills= payload;
          
        },
        setWebsitesState(state, payload) {
          state.websites= payload;
          
        },
        setGuideState(state, payload) {
          state.full_stack_guide= payload;
          
        },
        setCurrentTopic(state, topic) {
          state.currentTopic = topic
        },
        webFileNameChange(state, payload) {
          state.webPhotoName = payload;
        },
        
      createWebFileURL (state, payload) {
        state.webPhotoFileURL = payload;
    },
        setDesignsState(state, payload) {
          state.designPhotoFileURL = payload.designCoverPhoto;
          state.designPhotoName = payload.designCoverPhotoName;
          
        },
        fileNameChange(state, payload) {
          state.designPhotoName = payload;
        },
        
      createFileURL (state, payload) {
        state.designPhotoFileURL = payload;
    },

  },
  actions: {
  
// auth actions
async getCurrentUser(context) {
 
  const firestore = getFirestore();

  const userRef= doc(collection(firestore, "users"), auth.currentUser.uid);
  const userSnapshot = await getDoc(userRef);
  if (userSnapshot.exists()) {
    const userData = userSnapshot.data();
    const profileInfo = {
              firstName: userData.firstName,
              lastName: userData.lastName,
              phoneNumber: userData.phoneNumber,
              email: userData.email,
            };
        context.commit("setProfileInfo", profileInfo);
        context.commit("setProfileInitials");
  } else {
    console.log("User does not exist.");
  }
},
async signOut({  state}) {
  try {
    await auth.signOut();
   
    state.user.loggedIn= false;
 
  } catch (error) {
    console.log(error);
  }
},
      async updateUserSettings({commit, dispatch, state}) {
        const dataBase = await setDoc(collection(db, users)).doc(state.profileId);
        await dataBase.update ({
            firstName: state.profileFirstName,
            lastName: state.profileLastName,
            // username: state.profileUsername,
            initials: state.profileInitials,
        });
        await dispatch("getCurrentUser");
        commit("setProfileInitials");
      },
        
        // exxperience actions

      async getExperience({ commit }) {

        const querySnapshot = await getDocs(collection(db, "experience"));
        const data = querySnapshot.docs.map((doc) => doc.data());
        commit('setExperienceState', data);
      },
   
      async updatePost({ commit, dispatch }, payload) {
          commit('filterExperience', payload);
          await dispatch("getExperience");
      },
      async deletePost({ commit }, payload) {
          const db = getFirestore();
          const getPost = await collection(db, "experience").doc(payload);
          
          await getPost.delete();
          commit('filterExperience', payload)
      },
       
   // skills actions

   async getSkills({ commit }) {

    const querySnapshot = await getDocs(collection(db, "skills"));
    const data = querySnapshot.docs.map((doc) => doc.data());
    commit('setSkillsState', data);
  },

  async updatePost({ commit, dispatch }, payload) {
      commit('filterSkills', payload);
      await dispatch("getSkills");
  },
  async deletePost({ commit }, payload) {
      const db = getFirestore();
      const getPost = await collection(db, "skills").doc(payload);
      
      await getPost.delete();
      commit('filterSkills', payload)
  },

    // websites actions

    async getWebsites({ commit }) {

      const querySnapshot = await getDocs(collection(db, "websites"));
      const data = querySnapshot.docs.map((doc) => doc.data());
      commit('setWebsitesState', data);
    },
 
    async updatePost({ commit, dispatch }, payload) {
        commit('filterWebsites', payload);
        await dispatch("getWebsites");
    },
    async deletePost({ commit }, payload) {
        const db = getFirestore();
        const getPost = await collection(db, "websites").doc(payload);
        
        await getPost.delete();
        commit('filterWebsites', payload)
    },
    
      // designs actions

      async getDesigns({ commit, state }) {

        const querySnapshot = await getDocs(collection(db, "designs"));
        const dbResults = querySnapshot.docs;
        dbResults.forEach((doc) => {
          const data = {
              designCoverPhoto: doc.data().designCoverPhoto,
          designCoverPhotoName: doc.data().designCoverPhotoName,
          };
          state.designs.push(data);
          commit('setDesignsState', data);
        
      });
      state.postLoaded = true;
      },
   
      async updatePost({ commit, dispatch }, payload) {
          commit('filterDesigns', payload);
          await dispatch("getDesigns");
      },
      async deletePost({ commit }, payload) {
          const db = getFirestore();
          const getPost = await collection(db, "designs").doc(payload);
          
          await getPost.delete();
          commit('filterDesigns', payload)
      },
      async getGuide({ commit }) {

        const querySnapshot = await getDocs(collection(db, "full_stack_guide"));
        const data = querySnapshot.docs.map((doc) => doc.data());
        commit('setGuideState', data);
      },
   
      }
})

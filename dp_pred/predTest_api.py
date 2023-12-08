from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pickle
import joblib
import json
from pathlib import Path
import numpy as np
import pandas as pd

HERE = Path(__file__).parent

app = FastAPI()

origins = [
    "http://127.0.0.1:5173",
    'http://localhost:5173',
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class model_input(BaseModel):
    Belly_button_that_sticks_out : int
    Bulge_in_the_groin_or_scrotum : int
    Delayed_sexual_maturity : int
    Delayed_teeth : int
    Downward_palpebral_slant_to_eyes : int
    Hairline_with_a_widows_peak : int
    Mildly_sunken_chest_pectus_excavatum : int
    Mild_to_moderate_cognitive_problems : int
    Mild_to_moderate_short_height : int
    Poorly_developed_middle_section_of_the_face : int
    Short_fingers_and_toes_with_mild_webbing : int
    Single_crease_in_the_palm_of_the_hand : int
    Small_nose_with_nostrils_tipped_forward : int
    Testicles_that_have_not_come_down_undescended : int
    Top_portion_of_the_ear_folded_over_slightly : int
    Wide_set_eyes_with_droopy_eyelids : int
    Absent_or_small_knuckles : int
    Cleft_palate : int
    Deformed_ears : int
    Inability_to_fully_extend_the_joints_from_birth : int
    Narrow_shoulders : int
    Pale_skin : int
    Triple_jointed_thumbs : int
    Pain_in_the_abdomen : int
    Passing_out : int
    Clammy_skin : int
    Dizziness : int
    Nausea_and_vomiting : int
    Rapid_heart_rate : int
    Shock : int
    Bleeding_or_spotting_from_the_vagina_between_periods : int
    Periods_that_occur_less_than_28_days_apart_more_common_or_more_than_35_days_apart : int
    Time_between_periods_changes_each_month : int
    Heavier_bleeding : int
    Bleeding_that_lasts_for_more_days_than_normal_or_for_more_than_7_days : int
    Tenderness_and_dryness_of_the_vagina : int
    Hot_flashes : int
    Mood_swings : int
    Shallow_breathing : int
    Slow_and_labored_breathing : int
    Stopped_breathing : int
    Very_small_pupils : int
    Low_blood_pressure : int
    Coma_lack_of_responsiveness : int
    Convulsions_seizures : int
    Drowsiness : int
    Stupor_lack_of_alertness : int
    Bluish_skin_fingernails_and_lips : int
    Cold_clammy_skin : int
    Spasms_of_the_stomach_and_intestines : int
    Liver_failure : int
    Kidney_failure : int
    Pain_in_belly_area : int
    Person_may_have_a_fruity_odor : int
    Sweet_taste_in_mouth : int
    Feeling_of_drunkenness : int
    Stupor_confusion_decreased_level_of_consciousness : int
    Lack_of_coordination : int
    Difficulty_breathing : int
    Increased_need_to_urinate : int
    Backflow_regurgitation_of_food : int
    Chest_pain_which_may_increase_after_eating_or_may_be_felt_as_pain_in_the_back_neck_and_arms : int
    Cough : int
    Difficulty_swallowing_liquids_and_solids : int
    Heartburn : int
    Unintentional_weight_loss : int
    Very_short_trunk_arms_legs_and_neck : int
    Head_appears_large_in_relation_to_the_trunk : int
    Small_lower_jaw : int
    Narrow_chest : int
    Unusually_large_head : int
    Large_forehead_and_flat_bridge_of_the_nose : int
    Crowded_or_crooked_teeth : int
    Short_stature_well_below_the_average_height_for_a_person_of_the_same_age_and_sex : int
    Average_size_trunk_with_short_arms_and_legs_especially_the_upper_arms_and_thighs : int
    Bowed_legs : int
    Limited_range_of_motion_of_the_elbows : int
    Spine_curvatures_called_kyphosis_and_lordosis : int
    Short_fingers_with_an_extra_space_between_the_ring_and_middle_finger_trident_hand : int
    Decreased_muscle_tone_in_infants : int
    Loss_of_vision : int
    Severe_pain_in_the_throat : int
    Severe_pain_or_burning_in_the_nose_eyes_ears_lips_or_tongue : int
    Decreased_urine_output : int
    Blood_in_the_stool : int
    Burns_of_the_food_pipe_esophagus : int
    Severe_abdominal_pain : int
    Vomiting_blood : int
    Irregular_heart_beat : int
    Breathing_difficulty : int
    Throat_swelling : int
    Holes_in_the_skin_or_tissues_under_the_skin : int
    Confusion : int
    Fatigue : int
    Lethargy : int
    Shortness_of_breath : int
    Sleepiness : int
    Crusting_of_skin_bumps : int
    Cysts : int
    Papules_small_red_bumps : int
    Pustules_small_red_bumps_containing_white_or_yellow_pus : int
    Redness_around_the_skin_eruptions : int
    Scarring_of_the_skin : int
    Blackheads : int
    Abnormal_feeling_of_movement : int
    Hearing_loss : int
    Ringing_tinnitus_in_the_affected_ear : int
    Difficulty_understanding_speech : int
    Headache : int
    Loss_of_balance : int
    Numbness_in_the_face_or_one_ear : int
    Pain_in_the_face_or_one_ear : int
    Weakness_of_the_face_or_facial_asymmetry : int
    Frequent_middle_ear_infections : int
    Growth_problems_short_arms_and_legs : int
    Hearing_problems : int
    Intellectual_disability : int
    The_body_doesnt_respond_to_certain_hormones_even_though_hormone_levels_are_normal : int
    Distinct_facial_features : int
    Body_odor : int
    Carpal_tunnel_syndrome : int
    weakness : int
    Decreased_peripheral_vision : int
    gaps_between_the_teeth : int
    Enlarged_tongue : int
    Excessive_height : int
    Excessive_sweating : int
    Heart_enlargement_which_can_cause_fainting_or_shortness_of_breath : int
    Hoarseness : int
    Jaw_pain : int
    Joint_pain : int
    Large_bones_of_the_face_large_jaw_and_tongue_widely_spaced_teeth : int
    Large_feet_change_in_shoe_size_large_hands_change_in_ring_or_glove_size : int
    Large_glands_in_the_skin_sebaceous_glands_causing_oily_skin_thickening_of_the_skin_skin_tags_growths : int
    Sleep_apnea : int
    Abdominal_pain : int
    Dehydration : int
    High_fever : int
    Loss_of_appetite : int
    Low_blood_sugar : int
    Rapid_respiratory_rate : int
    Slow_sluggish_movement : int
    Unusual_and_excessive_sweating_on_face_or_palms : int
    Abrupt_decrease_in_urine_output : int
    Back_pain : int
    Blood_in_the_urine : int
    pain_in_the_side : int
    Chest_discomfort : int
    Cough_that_produces_mucus____the_mucus_may_be_clear_or_yellow_green : int
    Fever___usually_low_grade : int
    Shortness_of_breath_that_gets_worse_with_activity : int
    Wheezing : int
    Clumsy_speech_pattern_dysarthria : int
    Repetitive_eye_movements_nystagmus : int
    Uncoordinated_eye_movements : int
    Walking_problems_unsteady_gait_that_can_lead_to_falls : int
    Difficulty_controlling_arm_movements : int
    Sharp_cramping_or_dull_pain : int
    Steady_pain : int
    Pain_that_spreads_to_your_back_or_below_your_right_shoulder_blade : int
    Clay_colored_stools : int
    Yellowing_of_skin_and_whites_of_the_eyes_jaundice : int
    Pain_in_the_shoulder_arm_neck_jaw_back_or_belly_area : int
    Discomfort_that_feels_like_tightness_squeezing_crushing_burning_choking_or_aching : int
    Discomfort_that_occurs_at_rest_and_does_not_easily_go_away_when_you_take_medicine : int
    Anxiety : int
    Feeling_dizzy_or_lightheaded : int
    Fast_or_irregular_heartbeat : int
    Drooping_eyelids : int
    Difficulty_moving_the_eyes : int
    Slurred_speech_or_difficulty_swallowing : int
    Stiffness_in_the_neck : int
    Pain_in_the_arms_or_legs : int
    Inability_to_pass_urine : int
    Respiratory_failure_when_muscles_involved_in_breathing_become_weak : int
    Serious_nervous_system_problems_which_may_lead_to_death : int
    Bloody_stools : int
    Breath_odor_and_metallic_taste_in_the_mouth : int
    Bruising_easily : int
    Changes_in_mental_status_or_mood : int
    Decreased_sensation_especially_in_the_hands_or_feet : int
    Flank_painbetween_the_ribs_and_hips : int
    Hand_tremor : int
    Heart_murmur : int
    High_blood_pressure : int
    Nosebleeds : int
    Persistent_hiccups : int
    Prolonged_bleeding : int
    Swelling_due_to_the_body_keeping_in_fluid_may_be_seen_in_the_legs_ankles_and_feet : int
    Urination_changes_such_as_little_or_no_urine_excessive_urination_at_night_or_urination_that_stops_completely : int
    Bone_and_joint_pain : int
    Easy_bruising_and_bleeding : int
    Paleness : int
    Pain_or_feeling_of_fullness_below_the_ribs_from_an_enlarged_liver_or_spleen : int
    Pinpoint_red_spots_on_the_skin : int
    Swollen_lymph_nodes_in_the_neck_under_arms_and_groin : int
    Night_sweats : int
    Difficulty_sleeping : int
    Blue_color_to_the_skin : int
    Chest_tightness_or_congestion : int
    Inability_to_walk_in_a_straight_line_or_walk_at_all : int
    Bleeding_from_the_nose : int
    Bleeding_and_swellingÂ_rare_in_the_gums : int
    Bone_pain_or_tenderness : int
    Heavy_menstrual_periods : int
    Swelling_of_the_face : int
    Swelling_of_eye_socket : int
    Swelling_of__legs : int
    Swelling_of_arms : int
    Swelling_of_hands : int
    Swelling_of_feet : int
    Swelling_of_abdomen : int
    Bloating_and_fullness : int
    Indigestion : int
    Rapid : int
    general_swelling : int
    Chronic_diarrhea : int
    Darkening_of_the_skin : int
    Salt_craving : int
    heavy_menstrual_bleeding : int
    Painful_menstrual_periods : int
    Pelvic_pain_during_intercourse : int
    swelling_of_your_belly : int
    Constipation : int
    No_longer_being_able_to_pass_gas : int
    Acting_defiant_or_showing_impulsive_behavior : int
    Acting_nervous : int
    Crying_feeling_sad_or_hopeless_and_possibly_withdrawing_from_other_people : int
    Skipped_heartbeats_and_other_physical_complaints : int
    Trembling_or_twitching : int
    Changes_in_muscle_tone_especially_muscle_spasms_and_uncontrolled_movements : int
    Crossed_eyes : int
    Handwriting_that_gets_worse : int
    Difficulty_at_school : int
    Difficulty_understanding_what_people_are_saying : int
    Hearing_loss_1 : int
    Hyperactivity : int
    Visual_impairment_or_blindness : int
    Bronchitis : int
    Conjunctivitis : int
    Otitis_mediamiddle_ear_infection : int
    Pneumonia_lung_infection : int
    Sinusitis_sinus_infection : int
    Skin_infections : int
    Upper_respiratory_tract_infections : int
    Being_afraid_of_spending_time_alone : int
    Being_afraid_of_places_where_escape_might_be_hard : int
    Being_afraid_of_losing_control_in_a_public_place : int
    Depending_on_others : int
    Feeling_detached_or_separated_from_others : int
    Feeling_helpless : int
    Feeling_that_the_body_is_not_real : int
    Feeling_that_the_environment_is_not_real : int
    Having_an_unusual_temper_or_agitation : int
    Staying_in_the_house_for_long_periods : int
    Malaise : int
    Chills : int
    Sore_throat : int
    Mouth_and_throat_ulcers : int
    No_color_in_the_hair_skin_or_iris_of_the_eye : int
    Lighter_than_normal_skin_and_hair : int
    Patches_of_missing_skin_color : int
    Light_sensitivity : int
    Rapid_eye_movements : int
    Vision_problems_or_functionalÂ_blindness : int
    Lightheadedness : int
    Muscle_twitching : int
    Prolonged_muscle_spasms_tetany : int
    Intense_itching_or_burning_eyes : int
    Puffy_eyelids_most_often_in_the_morning : int
    Red_eyes : int
    Stringy_eye_discharge : int
    Tearing_watery_eyes : int
    Widened_blood_vessels_in_the_clear_tissue_covering_the_white_of_the_eye : int
    Hives_especially_over_the_neck_and_face : int
    Itching : int
    Nasal1_congestion : int
    Rashes : int
    Problems_with_smell : int
    Runny_nose : int
    Sneezing : int
    Abnormal_urine_color : int
    Excessive_thirst : int
    Abnormal_shape_of_the_lens : int
    Corneal_erosion : int
    Abnormal_coloring_of_the_retina : int
    Macular_hole : int
    Deafness : int
    Impaired_heart_function : int
    Obesity : int
    Progressive_kidney_failure : int
    Slowed_growth : int
    type_2_diabetes : int
    Difficulty_performing_more_than_one_task_at_a_time : int
    Getting_lost_on_familiar_routes : int
    Language_problems_such_as_trouble_remembering_the_names_of_familiar_objects : int
    Losing_interest_in_things_previously_enjoyed_and_being_in_a_flat_mood : int
    Misplacing_items : int
    Personality_changes_and_loss_of_social_skills : int
    Change_in_sleep_patterns_often_waking_up_at_night : int
    Delusions_depression_and_agitation : int
    Difficulty_doing_basic_tasks : int
    Difficulty_reading_or_writing : int
    Forgetting_details_about_current_events : int
    Hallucinations : int
    Abdominal_cramps : int
    Excessive_gas : int
    Rectal_pain_while_having_a_bowel_movement_tenesmus : int
    Abdominal_pain_more_so_in_the_right_upper_part_of_the_abdomen_pain_is_intense_continuous_or_stabbing : int
    Hiccups_that_do_not_stop_rare : int
    Difficulty_lifting_climbing_stairs_and_walking : int
    Difficulty_swallowing____choking_easily_drooling_or_gagging : int
    Head_drop_due_to_weakness_of_the_neck_muscles : int
    Speech_problems_such_as_a_slow_or_abnormal_speech_pattern_slurring_of_words : int
    Voice_changes_hoarseness : int
    Muscle_cramps : int
    Muscle_stiffness_called_spasticity : int
    Muscle_contractions_called_fasciculations : int
    A_lump_in_or_near_the_anus : int
    Anal_pain : int
    Itching_in_anal : int
    Discharge_from_the_anus : int
    Change_in_bowel_habits : int
    Swollen_lymph_nodes_in_the_groin_or_anal_region : int
    Increased_urinary_frequency_or_urgency : int
    Decreased_alertness : int
    Easy_bruising_or_bleeding : int
    Feeling_anxious : int
    Chest_discomfort_or_tightness : int
    Palpitations : int
    swelling_of_tongue : int
    Unconsciousness : int
    Coughing_up_blood : int
    Loud_breathing : int
    Lower_neck_lump_which_often_grows_quickly : int
    Pain_in_throat : int
    Vocal_cord_paralysis : int
    Overactive_thyroid : int
    Feeling_weak_or_tired_more_often_than_usual_or_with_exercise : int
    Problems_concentrating_or_thinking : int
    Irritability : int
    Numbness_and_tingling_of_hands_or_feet : int
    Blue_color_to_the_whites_of_the_eyes : int
    Brittle_nails : int
    Desire_to_eat_ice_or_other_non_food_things_pica_syndrome : int
    Lightheadedness_when_you_stand_up : int
    Sore_or_inflamed_tongue : int
    Abnormal_or_increased_menstrual_bleeding_in_females : int
    Loss_of_sexual_desire_in_men : int
    Loss_of_muscle_tone_floppiness : int
    Trouble_feeding : int
    Heartburn_acid_reflux : int
    Trembling_arm_and_leg_movements : int
    Unstable_or_jerky_walking : int
    Little_or_no_speech : int
    Laughing_and_smiling_often : int
    Light_hair_skin_and_eye_color_compared_to_rest_of_family : int
    Small_head_size_compared_to_body_flattened_back_of_head : int
    Excessive_movement_of_the_hands_and_limbs : int
    Sleep_problems : int
    Tongue_thrusting_drooling : int
    Unusual_chewing_and_mouthing_movements : int
    Walking_with_arms_uplifted_and_hands_waving : int
    Discharge_of_pus_from_the_rectum : int
    Redness_painful_and_hardened_tissue_in_the_area_of_the_anus : int
    Tenderness_In_anus_swollen_part : int
    ntense_fear_of_gaining_weight_or_becoming_fat : int
    Refuses_to_keep_their_weight_at_what_is_considered_normal_for_their_age_and_height_15_or_more_below_the_normal_weight : int
    Has_a_body_image_that_is_very_distorted_is_very_focused_on_body_weight_or_shape_and_refuse_to_admit_the_danger_of_weight_loss : int
    Cutting_food_into_small_pieces_or_moving_them_around_the_plate_instead_of_eating : int
    Exercising_all_the_time_even_when_the_weather_is_bad_they_are_hurt_or_their_schedule_is_busy : int
    Going_to_the_bathroom_right_after_meals : int
    Refusing_to_eat_around_other_people : int
    Using_pills_to_make_themselves_urinate : int
    A_popping_sound_at_the_time_of_injury : int
    Obvious_knee_swelling_within_6_hours_of_injury : int
    Pain_especially_when_you_try_to_put_weight_on_the_injured_leg : int
    Difficulty_in_continuing_with_your_sport : int
    Feeling_of_instability : int
    An_itchy_sore_develops_that_is_similar_to_an_insect_bite : int
    The_sore_is_usually_painless : int
    A_scab_often_forms_and_then_dries_and_falls_off_within_2_weeks : int
    chest_pain : int
    Bloody_urine : int
    Burning_sensation_when_urinating : int
    Swelling_edema_in_any_area_of_the_body_especially_in_the_legs : int
    Vomiting : int
    Collapse_of_heart_beat : int
    Methemoglobinemia_very_dark_blood_from_abnormal_red_blood_cells : int
    Too_much_or_too_little_acid_in_the_blood_which_leads_to_damage_in_all_of_the_body_organs : int
    Asphyxia : int
    Chemical_pneumonitis : int
    viral_infection : int
    Hemorrhagic_pulmonary_edema : int
    Respiratory_distress_or_failure : int
    Pneumothorax : int
    Pleural_effusion : int
    Empyema : int
    Incoordination : int
    Somnolence : int
    Blurred_vision : int
    Brain_damage_from_low_oxygen_level : int
    Burns_in_skin : int
    Irritation_in_skin : int
    Holes_necrosis_in_the_skin_or_tissues_underneath : int
    Bruising_and_bleeding_under_the_skin : int
    Apathy_loss_of_desire_to_do_anything : int
    Slow_breathing : int
    Pounding_or_racing_heartbeatpalpitations : int
    Slowdown_or_stoppage_of_the_bowels : int
    Dry_mucous_membranes_in_the_mouth : int
    Eye_changes_in_pupil_size : int
    Eyes_move_quickly_from_side_to_side : int
    Flushed_skin : int
    Restlessness : int
    Urination_difficulty : int
    Leg_cramps : int
    Unsteady_walk : int
    Blue_lips_and_fingernails : int
    act_witty_and_charming : int
    good_at_flattery_and_manipulating_other_peoples_emotions : int
    Break_the_law_repeatedly : int
    Disregard_the_safety_of_self_and_others : int
    Have_problems_with_substance_abuse : int
    Lie_steal_and_fight_often : int
    Not_show_guilt_or_remorse : int
    Often_be_angry_or_arrogant : int
    Blood_pressure_changes : int
    Reduced_pulse : int
    Transient_ischemic_attacks_TIA : int
    sharp_stabbing_tearing_or_ripping_chest_pain : int
    Anxiety_and_a_feeling_of_doom : int
    Rapid_weak_pulse : int
    Stroke_symptoms : int
    Bounding_pulse : int
    Waking_up_short_of_breath_some_time_after_falling_asleep : int
    Uneven_rapid_racing_pounding_or_fluttering_pulse : int
    Breathing_problems_when_exercising : int
    Becoming_easily_tired : int
    Failure_to_gain_weight : int
    Poor_feeding : int
    Heart_failure : int
    Respiratory_infections : int
    Early_closure_of_sutures_between_bones_of_the_skull_noted_by_ridging_along_sutures : int
    Frequent_ear_infections : int
    Fusion_or_severe_webbing_of_the_2nd_3rd_and_4th_fingers_often_called_mitten_hands : int
    Large_or_late_closing_soft_spot_on_a_babys_skull : int
    Possible_slow_intellectual_development : int
    Prominent_or_bulging_eyes : int
    Severe_under_development_of_the_midface : int
    Skeletal_limb_abnormalities : int
    Webbing_or_fusion_of_the_toes : int
    Lightheadedness_upon_standing : int
    Low_white_cell_count_leukopenia : int
    Low_platelet_count_thrombocytopenia : int
    Bleeding_gums : int
    Nose_bleeds : int
    Rash_small_pinpoint_red_marks_on_the_skin_petechiae : int
    severe_infections : int
    pain_may_be_worse_when_you_walk_cough_or_make_sudden_movements : int
    Chills_and_shaking : int
    Hard_stools : int
    Distorted_repeated_or_left_out_speech_sounds_or_words_The_person_has_difficulty_putting_words_together_in_the_correct_order : int
    Struggling_to_pronounce_the_right_word : int
    More_difficulty_using_longer_words_either_all_the_time_or_sometimes : int
    Ability_to_use_short_everyday_phrases_or_sayings_such_as_How_are_you_without_a_problem : int
    Better_writing_ability_than_speaking_ability : int
    Too_slow_bradycardia_heart_rate : int
    Too_quick_tachycardia_heart_rate : int
    Irregular_uneven_possibly_with_extra_or_skipped_heart_beats : int
    Cold_arm_or_leg : int
    Decreased_or_no_pulse_in_an_arm_or_leg : int
    Lack_of_movement_in_the_arm_or_leg : int
    Pale_color_of_the_arm_or_leg_pallor : int
    Weakness_of_an_arm_or_leg : int
    Joint_swelling : int
    Reduced_ability_to_move_the_joint : int
    Redness_and_warmth_of_the_skin_around_a_joint : int
    Joint_stiffness_especially_in_the_morning : int
    Clubbing_of_fingers : int
    Nail_abnormalities : int
    Bloody_sputum : int
    Passing_worms_in_stool : int
    Skin_rash : int
    Stomach_pain : int
    coughing_up_worms : int
    Worms_leaving_the_body_through_the_nose_or_mouth : int
    Increased_phlegm_production_which_may_be_bloody : int
    Skin_sores_lesions : int
    Coughing_up_foul_smelling_greenish_or_dark_phlegm_sputum_or_phlegm_that_contains_pus_or_blood : int
    Seeing_food_or_tube_feed_material_if_being_fed_artificially_in_your_sputum : int
    Cough_with_or_without_sputum_phlegm_production : int
    Pulling_in_of_the_skin_between_the_ribs_when_breathing_intercostal_retractions : int
    Whistling_sound_or_wheezing_as_you_breathe : int
    Pain_or_tightness_in_the_chest : int
    Abnormal_breathing_pattern_breathing_out_takes_more_than_twice_as_long_as_breathing_in : int
    Bluish_color_to_the_lips_and_face_cyanosis : int
    Decreased_coordination_of_movements_ataxia_in_late_childhood_that_can_include_ataxic_gait_cerebellar_ataxia_jerky_gait_unsteadiness : int
    Decreasing_mental_development_slows_or_stops_after_age_10_to_12 : int
    Delayed_walking : int
    Discoloration_of_skin_areas_exposed_to_sunlight : int
    Discoloration_of_skin_coffee_with_milk_colored_spots : int
    Enlarged_blood_vessels_in_skin_of_nose_ears_and_inside_of_the_elbow_and_knee : int
    Enlarged_blood_vessels_in_the_whites_of_the_eyes : int
    Jerky_or_abnormal_eye_movements_nystagmus_late_in_the_disease : int
    Premature_graying_of_the_hair : int
    Sensitivity_to_radiation_including_x_rays : int
    Severe_respiratory_infections_that_keep_coming_back_recurring : int
    Blisters_with_oozing_and_crusting : int
    Dry_skin_all_over_the_body_or_areas_of_bumpy_skin_on_the_back_of_the_arms_and_front_of_the_thighs : int
    Ear_discharge_or_bleeding : int
    Raw_areas_of_the_skin_from_scratching : int
    Skin_color_changes_such_as_more_or_less_color_than_the_normal_skin_tone : int
    Skin_redness_or_inflammation_around_the_blisters : int
    Thickened_or_leather_like_areas_which_can_occur_after_long_term_irritation_and_scratching : int
    fainting : int
    Loss_of_ability_to_exercise : int
    Breathing_difficulty_when_lying_flat : int
    Breathing_difficulty_when_asleep : int
    Symptoms_due_to_embolism_of_tumor_material : int
    Bluish_skin_especially_on_the_fingers_Raynaud_phenomenon : int
    Curvature_of_nails_accompanied_by_soft_tissue_swelling_clubbing_of_the_fingers : int
    Fingers_that_change_color_upon_pressure_or_with_cold_or_stress : int
    swelling_of_whole_body : int
    Doesnt_pay_attention_to_details_or_makes_careless_mistakes : int
    Has_problems_focusing_during_tasks_or_play : int
    Doesnt_listen_when_spoken_to_directly : int
    Doesnt_follow_through_on_instructions_and_doesnt_finish_schoolwork_or_chores : int
    Has_problems_organizing_tasks_and_activities : int
    Avoids_or_doesnt_like_tasks_that_require_mental_effort : int
    Often_loses_things : int
    easily_distracted : int
    often_forgetful : int
    Fidgets_or_squirms_in_seat : int
    Leaves_their_seat_when_they_should_stay_in_their_seat : int
    Runs_about_or_climbs_when_they_shouldnt_be_doing_so : int
    Has_problems_playing_or_working_quietly : int
    Is_often_on_the_go_acts_as_if_driven_by_a_motor : int
    Talks_all_the_time : int
    Blurts_out_answers_before_questions_have_been_completed : int
    Has_problems_awaiting_their_turn : int
    Interrupts_or_intrudes_on_others : int
    Be_very_sensitive_to_sight_hearing_touch_smell_or_taste : int
    Be_very_upset_when_routines_are_changed : int
    Repeat_body_movements_over_and_over : int
    Be_unusually_attached_to_things : int
    Cant_start_or_maintain_a_conversation : int
    Uses_gestures_instead_of_words : int
    Develops_language_slowly_or_not_at_all : int
    Doesnt_adjust_gaze_to_look_at_objects_that_others_are_looking_at : int
    Doesnt_refer_to_self_the_right_way : int
    Doesnt_point_to_show_other_people_objects : int
    Repeats_words_or_memorized_passages_such_as_commercials : int
    Doesnt_make_friends : int
    Doesnt_play_interactive_games : int
    Is_withdrawn_from_social_activity : int
    May_not_respond_to_eye_contact_or_smiles_or_may_avoid_eye_contact : int
    May_treat_others_as_objects : int
    Prefers_to_be_alone_rather_than_with_others : int
    Isnt_able_to_show_empathy : int
    Doesnt_startle_at_loud_noises : int
    Has_very_high_or_very_low_senses_of_sight_hearing_touch_smell_or_taste : int
    May_find_normal_noises_painful_and_hold_their_hands_over_their_ears : int
    May_withdraw_from_physical_contact_because_its_too_stimulating_or_overwhelming : int
    Rubs_surfaces_mouths_or_licks_objects : int
    May_have_a_very_high_or_very_low_response_to_pain : int
    Doesnt_imitate_the_actions_of_others : int
    Prefers_solitary_or_ritualistic_play : int
    Shows_little_pretend_or_imaginative_play : int
    Acts_out_with_intense_tantrums : int
    Gets_stuck_on_a_single_topic_or_task : int
    Has_a_short_attention_span : int
    Has_very_narrow_interests : int
    Is_overactive_or_very_passive : int
    Is_aggressive_toward_others_or_self : int
    Shows_a_strong_need_for_things_being_the_same : int
    Repeats_body_movements : int
    Abdominal_distention : int
    Bladder_or_bowel_problems : int
    Blurry_vision_widened_dilated_pupils : int
    Goosebumps_flushed_red_skin_above_the_level_of_the_spinal_cord_injury : int
    Irregular_heartbeat_slow_or_fast_pulse : int
    Muscle_spasms_especially_in_the_jaw : int
    Nasal_congestion : int
    Throbbing_headache : int
    Feeling_full_after_only_a_few_bites : int
    Problems_controlling_bowel_movements : int
    Abnormal_heart_rate : int
    Blood_pressure_drop_with_position_that_causes_dizziness_when_standing : int
    Difficulty_beginning_to_urinate : int
    Feeling_of_incomplete_bladder_emptying : int
    Leaking_urine : int
    easily_hurt_when_people_criticize_or_disapprove_of_them : int
    Hold_back_too_much_in_intimate_relationships : int
    reluctant_to_become_involved_with_people : int
    Avoid_activities_or_jobs_that_involve_contact_with_others : int
    Be_shy_in_social_situations_out_of_fear_of_doing_something_wrong : int
    Make_potential_difficulties_seem_worse_than_they_are : int
    Hold_the_view_they_are_not_good_socially_not_as_good_as_other_people_or_unappealing : int
    Redness_of_foreskin_or_penis : int
    Other_rashes_on_the_head_of_the_penis : int
    Foul_smelling_discharge : int
    Painful_penis_and_foreskin : int
    Altered_level_of_consciousness : int
    Difficulty_in_thinking : int
    Faulty_judgment : int
    Lack_of_coordination_1 : int
    Sluggishness : int
    Staggering_difficulty_with_balance : int
    A_tender_lump_on_either_side_of_the_vaginal_opening : int
    Swelling_and_redness : int
    Pain_with_sitting_or_walking : int
    Pain_with_sexual_intercourse : int
    Vaginal_discharge : int
    Vaginal_pressure : int
    Rate_of_weight_gain_is_much_lower_than_that_of_other_children_of_similar_age_and_sex : int
    Needing_to_urinate_more_often_than_usual : int
    Kidney_stones : int
    Movement_changes_such_as_involuntary_or_slowed_movements : int
    Increased_muscle_tone : int
    tremor_in_full_body : int
    Problems_finding_words : int
    Uncontrollable_repeated_movements_speech_or_cries_tics : int
    Walking_difficulty : int
    Balance_and_coordination_difficulties : int
    Curvature_of_spine : int
    Poor_muscle_coordination_that_usually_develops_after_age_10 : int
    Protruding_abdomen : int
    Stool_abnormalities_including_fatty_stools_that_appear_pale_in_color_frothy_stools_and_abnormally_foul_smelling_stools : int
    Difficulty_walking_that_gets_worse_over_time_by_age_25_to_30_the_person_is_usually_unable_to_walk : int
    Frequent_falls : int
    Difficulty_getting_up_from_the_floor_and_climbing_stairs : int
    Difficulty_with_running_hopping_and_jumping : int
    Loss_of_muscle_mass : int
    Toe_walking : int
    Muscle_weakness_in_the_arms_neck_and_other_areas_is_not_as_severe_as_in_the_lower_body : int
    Large_size_for_a_newborn : int
    Red_birth_mark_on_forehead_or_eyelids_nevus_flammeus : int
    Creases_in_ear_lobes : int
    Large_tongue_macroglossia : int
    Abdominal_wall_defect : int
    Enlargement_of_some_organ : int
    Overgrowth_of_one_side_of_the_body_hemihyperplasia_hemihypertrophy : int
    Tumor_growth_such_as_Wilms_tumors_and_hepatoblastomas : int
    Difficulty_closing_one_eye : int
    Difficulty_eating_and_drinking_because_food_falls_out_of_one_side_of_the_mouth : int
    Drooling_due_to_lack_of_control_over_the_muscles_of_the_face : int
    Drooping_of_the_face_such_as_the_eyelid_or_corner_of_the_mouth : int
    Problems_smiling_grimacing_or_making_facial_expressions : int
    Dry_eye_which_may_lead_to_eye_sores_or_infections : int
    Dry_mouth : int
    Headache_if_there_is_an_infection_such_as_Lyme_disease : int
    Loss_of_sense_of_taste : int
    Sound_that_is_louder_in_one_ear_hyperacusis : int
    Feeling_like_you_are_spinning_or_moving : int
    Feeling_like_the_world_is_spinning_around_you : int
    Vision_problems_such_as_a_feeling_that_things_are_jumping_or_moving : int
    Difficulty_walking : int
    Loss_of_feeling_sensation_in_hands_and_feet : int
    Loss_of_muscle_function_or_paralysis_of_the_lower_legs : int
    Strange_eye_movements_nystagmus : int
    Awakening_at_night_short_of_breath : int
    Urinary_incontinence : int
    Abdominal_pain_in_the_upper_right_side : int
    Eats_large_amounts_of_food_in_a_short_period : int
    Is_not_able_to_control_overeating : int
    Eats_food_very_fast_each_time : int
    Keeps_eating_even_when_full_gorging_or_until_uncomfortably_full : int
    Eats_even_though_not_hungry : int
    Eats_alone_in_secret : int
    Feels_guilty_disgusted_ashamed_or_depressed_after_eating_so_much : int
    Excess_involvement_in_activities : int
    Little_need_for_sleep : int
    Poor_judgment : int
    Poor_temper_control : int
    Lack_of_self_control_and_reckless_behavior : int
    Very_irritable_mood_racing_thoughts_talking_a_lot_and_false_beliefs_about_self_or_abilities : int
    Rapid_speech : int
    Concerns_about_things_that_are_not_true_delusions : int
    Painful_urination : int
    Continuous_feeling_of_a_full_bladder : int
    Pain_during_urination_dysuria : int
    Straining_to_urinate : int
    Urinary_tract_infection : int
    Waking_up_at_night_to_urinate_nocturia : int

    # class Config:
    #     arbitrary_types_allowed = True

# pred_model = joblib.load("model_knn.sav")
with open(HERE / "model_knn.sav",'rb') as f:
    model_knn = pickle.load(f)

# with open(HERE / "model_rfc.sav",'rb') as f:
#     model_rfc = pickle.load(f)

# model_rfc = joblib.load("model_rfc.sav")
with open(HERE / "model_svc.sav",'rb') as f:
    model_svc = pickle.load(f)
# pred_model = pickle.load(open(HERE / "dp_model"),'rb')
# C:\Users\Harshit Bajpai\Desktop\Disease_prediciton\dp_pred\dp_model.sav

disease_list = ['Aarskog syndrome', 'Aase syndrome',
       'Abdominal aortic\xa0aneurysm', 'Abnormal uterine bleeding (AUB)',
       'Acetaminophen and codeine overdose', 'Acetone poisoning',
       'Achalasia', 'Achondrogenesis', 'Achondroplasia',
       'Acid soldering flux poisoning', 'Acidosis', 'Acne',
       'Acoustic neuroma', 'Acrodysostosis', 'Acromegaly',
       'Acute adrenal crisis', 'Acute arterial occlusion - kidney',
       'Acute bronchitis', 'Acute cerebellar ataxia',
       'Acute cholecystitis', 'Acute coronary syndrome',
       'Acute flaccid myelitis', 'Acute kidney failure',
       'Acute lymphoblastic leukemia', 'Acute mountain sickness',
       'Acute myeloid leukemia', 'Acute nephritic syndrome',
       'Acute pancreatitis', 'Acute respiratory distress syndrome',
       'Acute tubular necrosis', 'Addison disease', 'Adenomyosis',
       'Adhesion', 'Adjustment disorder', 'Adrenoleukodystrophy',
       'Agammaglobulinemia', 'Agoraphobia', 'Agranulocytosis', 'Albinism',
       'Alkalosis', 'Allergic conjunctivitis', 'Allergic reactions',
       'Allergic rhinitis', 'Alpha-1 antitrypsin deficiency',
       'Alport syndrome', 'Alstrom syndrome', 'Alzheimer', 'Amebiasis',
       'Amebic liver abscess', 'Amyotrophic lateral sclerosis\xa0',
       'Anal cancer', 'Analgesic nephropathy', 'Anaphylaxis',
       'Anaplastic thyroid cancer', 'Anemia', 'Angelman syndrome',
       'Anorectal abscess', 'Anorexia',
       'Anterior cruciate ligament (ACL) injury', 'Anthrax',
       'Anti-glomerular basement membrane disease',
       'Anti-rust product poisoning',
       'Anticoagulant rodenticides poisoning',
       'Antidiarrheal drug overdose', 'Antifreeze poisoning',
       'Antisocial personality disorder', 'Aortic arch syndrome',
       'Aortic dissection', 'Aortic regurgitation', 'Aortic stenosis',
       'Aortopulmonary window', 'Apert syndrome', 'Aplastic anemia',
       'Appendicitis', 'Apraxia', 'Arrhythmias', 'Arterial embolism',
       'Arthritis', 'Asbestosis', 'Ascariasis', 'Aspergillosis',
       'Aspiration pneumonia', 'Asthma', 'Ataxia - telangiectasia',
       'Atopic dermatitis', 'Atrial fibrillation and atrial flutter',
       'Atrial myxoma', 'Attention deficit hyperactivity disorder',
       'Atypical pneumonia', 'Autism spectrum disorder',
       'Autoimmune hepatitis', 'Autonomic dysreflexia',
       'Autonomic neuropathy', 'Avoidant personality disorder',
       'Bacterial gastroenteritis', 'Balanitis',
       'Barbiturate intoxication and overdose',
       'Bartholin cyst or abscess', 'Bartter syndrome',
       'Basal ganglia dysfunction', 'Bassen-Kornzweig syndrome',
       'Becker muscular dystrophy', 'Beckwith-Wiedemann syndrome',
       'Bell palsy', 'Benign positional vertigo', 'Beriberi',
       'Bilateral hydronephrosis', 'Bile duct obstruction',
       'Binge eating disorder', 'Bipolar disorder', 'Bladder cancer',
       'Bladder outlet obstruction']


@app.post('/dp_pred')
def dp_predictor(input_parameters:model_input):
    input_data = input_parameters.model_dump_json()
    input_dictionary = json.loads(input_data)
    # print("Input Dictionary :", input_dictionary)
    input_list = list(input_dictionary.values())
    # input_list = converter(input_dictionary)
    print("input values are = ", input_list)
        # input_list2 = [33, 35, 35, 50, 38, 32, 26, 21, 22, 21, 18, 11, 8, 4, 3, 3, 1]
    prediction_knn = model_knn.predict([input_list])
    # prediction_rfc = model_rfc.predict([input_list])
    prediction_svc = model_svc.predict([input_list])
    # print("Result of pred: ", prediction)
    dis1 = int(prediction_knn)
    dis2 = int(prediction_svc)
    pred_list = disease_list[dis1]+", "+disease_list[dis2]
    pred_json = json.dumps(pred_list)
    # print("Result of pred in json: ", pred_json)
    return pred_json